const popupClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

// popup Edit profile
const popupCloseEditProfile = document.querySelector('.popup__close-edit-profile');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const formEdit= document.querySelector('form[name=form-edit]');
const formPhotoElement = document.querySelector('form[name=form-add-photo]');
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const profileNameInput = document.querySelector('input[name=profile-name]');
const profileActivityInput = document.querySelector('input[name=profile-activity]');

// popup Add photo
const popupCloseAddPhoto = document.querySelector('.popup__close-add-photo');
const buttonAddPhoto = document.querySelector('.profile__add-photo-button');
const popupAddPhoto = document.querySelector('.popup_add-photo');
const ulPhotoGrid = document.querySelector('.photo__grid');
const itemTemplate = document.querySelector('#photo__item-template').content;
const photoNameInput = document.querySelector('input[name=photo-name]');
const photoLinkInput = document.querySelector('input[name=photo-link]');

// popup Open photo
const popupClosePhoto = document.querySelector('.popup__close-photo');
const popupOpenPhoto = document.querySelector('.popup_photo-open');
const popupTitlePhoto = document.querySelector('.popup__photo-title');
const popupPhoto = document.querySelector('.popup__photo-wide');
const photoTitle = document.querySelector('.photo__item-title');

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
      let photoAlt = evt.target.alt.split(' ')[1];
      let photoSrc = evt.target.src;
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

