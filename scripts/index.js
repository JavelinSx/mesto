const popupClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');

// popup Edit profile
const popupCloseEditProfile = document.querySelector('.popup__close-edit-profile');
const popupEditProfile = document.querySelector('.popup__edit-profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const formEdit= document.querySelector('form[name=form-edit]');
const formPhotoElement = document.querySelector('form[name=form-add-photo]');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let profileNameInput = document.querySelector('input[name=profile-name]');
let profileActivityInput = document.querySelector('input[name=profile-activity]');

// popup Add photo
const popupCloseAddPhoto = document.querySelector('.popup__close-add-photo');
const buttonAddPhoto = document.querySelector('.profile__add-photo-button');
const popupAddPhoto = document.querySelector('.popup__add-photo');
const ulPhotoGrid = document.querySelector('.photo__grid');
const itemTemplate = document.querySelector('#photo__item-template').content;
let photoNameInput = document.querySelector('input[name=photo-name]');
let photoLinkInput = document.querySelector('input[name=photo-link]');

// popup Open photo
const popupClosePhoto = document.querySelector('.popup__close-photo');
const popupOpenPhoto = document.querySelector('.popup__photo-open');
const popupTitlePhoto = document.querySelector('.popup__photo-title');
const popupPhoto = document.querySelector('.popup__photo-wide');
const photoTitle = document.querySelector('.photo__item-title');

// work of photo

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
function addAllPhoto(array){
    for (item of array){
        addOnePhoto(item.name, item.link)
    }
}
addAllPhoto(initialCards);
function addOnePhoto(name, link){
  if(name !=='' || link !== ''){
    const photoItemClone = itemTemplate.querySelector('.photo__item').cloneNode(true);
    const photoItemTitleClone = photoItemClone.querySelector('.photo__item-title');
    const photoItemImgClone = photoItemClone.querySelector('.photo__item-img');
    const photoLike = photoItemClone.querySelector('.photo__item-like');
    const photoDeleteClone = photoItemClone.querySelector('.photo__item-delete');
    photoItemImgClone.src = link;
    photoItemTitleClone.textContent = name;
    photoItemImgClone.alt = 'Фото ' + name;

    photoLike.addEventListener('click', (e) => {
        e.target.classList.toggle('photo__item-like_active')
    });
    photoDeleteClone.addEventListener('click', (e) => {
             ulPhotoGrid.removeChild(e.target.parentElement);
    })
    photoItemImgClone.addEventListener('click', (e) => {
      popupOpenPhoto.classList.add('popup_open');
      let photoAlt = e.target.alt.split(' ')[1];
      let photoSrc = e.target.src;
      popupTitlePhoto.textContent = photoAlt;
      popupPhoto.src = photoSrc;
    })
    ulPhotoGrid.insertBefore(photoItemClone,ulPhotoGrid.firstChild)
  }
  else{
    alert("Название или ссылка не может быть пустым")
  }

}

// popup Edit profile

buttonEdit.addEventListener('click', () => {
    popupEditProfile.classList.add('popup_open');
    profileNameInput.value = profileName.textContent;
    profileActivityInput.value = profileActivity.textContent;
    
})

function formSubmitHandlerEditProfile (evt) {
    evt.preventDefault(); 
    profileName.textContent = profileNameInput.value;
    profileActivity.textContent = profileActivityInput.value;
    evt.target.parentElement.classList.remove('popup_open');
}

formEdit.addEventListener('submit', formSubmitHandlerEditProfile)

popupCloseEditProfile.addEventListener('click', (e) => {
  e.target.parentElement.parentElement.classList.remove('popup_open');
})

// popup Add photo

buttonAddPhoto.addEventListener('click', () => {
    popupAddPhoto.classList.add('popup_open');  
})

function formSubmitHandlerAddPhoto (evt) {
    evt.preventDefault(); 
    addOnePhoto(photoNameInput.value, photoLinkInput.value);
    evt.target.parentElement.classList.remove('popup_open');
}

formPhotoElement.addEventListener('submit', formSubmitHandlerAddPhoto)

popupCloseAddPhoto.addEventListener('click', (e) => {
  e.target.parentElement.parentElement.classList.remove('popup_open');
})
// popup Open photo
popupClosePhoto.addEventListener('click', (e) => {
  e.target.parentElement.parentElement.classList.remove('popup_open');
})

