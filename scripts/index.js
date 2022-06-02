const popupClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

// popup Edit profile

const popupCloseEditProfile = document.querySelector('.popup__close-edit-profile');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');


// popup Add photo

const popupCloseAddPhoto = document.querySelector('.popup__close-add-photo');
const buttonAddPhoto = document.querySelector('.profile__add-photo-button');
const popupAddPhoto = document.querySelector('.popup_add-photo');
const ulPhotoGrid = document.querySelector('.photo__grid');
const itemTemplate = document.querySelector('#photo__item-template').content;


// popup Open photo

const popupClosePhoto = document.querySelector('.popup__close-photo');
const popupOpenPhoto = document.querySelector('.popup_photo-open');
const popupTitlePhoto = document.querySelector('.popup__photo-title');
const popupPhoto = document.querySelector('.popup__photo-wide');
const photoTitle = document.querySelector('.photo__item-title');

//-----------------

//forms =>

const formEdit= document.querySelector('form[name=form-edit]');
const formPhotoElement = document.querySelector('form[name=form-add-photo]');

//----------------<=

//form Input =>

const profileNameInput = formEdit.querySelector('input[name=profile-name]');
const profileActivityInput = formEdit.querySelector('input[name=profile-activity]');
const photoNameInput = document.querySelector('input[name=photo-name]');
const photoLinkInput = document.querySelector('input[name=photo-link]');

//---------------<=

const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.add('popup__input_invalid');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.remove('popup__input_invalid');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const validForm = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {

    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {

    hideInputError(formElement, inputElement);
  }
}; 

const createEventListener = (formElement) => {
  
  const allInput = Array.from(formElement.querySelectorAll('.popup__input'))
  console.log(allInput)
  allInput.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      validForm(formElement, inputElement)

    })
  })
}

const validationForm = () => {
  const allForm = Array.from(document.forms) 
  allForm.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    createEventListener(formElement)
  }) 
}
validationForm();



// work of photo


function addAllPhoto(array){
    for (item of array){
        addCard(addOnePhoto(item.name, item.link));
    }
}

addAllPhoto(initialCards);

function addOnePhoto(name, link){
  
    const photoItemClone = itemTemplate.querySelector('.photo__item').cloneNode(true);
    const photoItemTitleClone = photoItemClone.querySelector('.photo__item-title');
    const photoItemImgClone = photoItemClone.querySelector('.photo__item-img');
    const photoLike = photoItemClone.querySelector('.photo__item-like');
    const photoDeleteClone = photoItemClone.querySelector('.photo__item-delete');
    photoItemImgClone.src = link;
    photoItemTitleClone.textContent = name;
    photoItemImgClone.alt = 'Фото ' + name;

    photoLike.addEventListener('click', (evt) => {
        evt.target.classList.toggle('photo__item-like_active')
    });
    photoDeleteClone.addEventListener('click', (evt) => {
             evt.target.closest('.photo__item').remove();
    })
    photoItemImgClone.addEventListener('click', (evt) => {
      openPopup(popupOpenPhoto);
      const photoAlt = photoItemImgClone.alt.split(' ')[1];
      const photoSrc = photoItemImgClone.src;
      popupTitlePhoto.textContent = photoAlt;
      popupPhoto.src = photoSrc;
      popupPhoto.alt = evt.target.alt;
    })
    return photoItemClone;
}

function addCard(card){
  ulPhotoGrid.prepend(card);
}

function openPopup (popup) {
  popup.classList.add('popup_open');
}

function closePopup (popup) {
  popup.classList.remove('popup_open');
} 

// popup Edit profile

buttonEdit.addEventListener('click', () => {
    openPopup(popupEditProfile);
    profileNameInput.value = profileName.textContent;
    profileActivityInput.value = profileActivity.textContent;
})

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = profileNameInput.value;
    profileActivity.textContent = profileActivityInput.value;
    closePopup(evt.target.closest('.popup'));
}

formEdit.addEventListener('submit', handleProfileFormSubmit)

popupCloseEditProfile.addEventListener('click', (evt) => {
    closePopup(evt.target.closest('.popup'));
})

// popup Add photo

buttonAddPhoto.addEventListener('click', () => {
    openPopup(popupAddPhoto);
})

function handleAddCardFormSubmit (evt) {
    evt.preventDefault(); 
    if(photoNameInput.value !=='' || photoLinkInput.value !== ''){
      addCard(addOnePhoto(photoNameInput.value, photoLinkInput.value));
      formPhotoElement.reset();
      closePopup(evt.target.closest('.popup'));
    }
    else{
      alert("Название или ссылка не может быть пустым")
    }
}

formPhotoElement.addEventListener('submit', handleAddCardFormSubmit)

popupCloseAddPhoto.addEventListener('click', (evt) => {
  closePopup(evt.target.closest('.popup'));
})
// popup Open photo
popupClosePhoto.addEventListener('click', (evt) => {
  closePopup(evt.target.closest('.popup'));
})

