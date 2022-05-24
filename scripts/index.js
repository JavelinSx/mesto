// popup Edit profile

const buttonEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('form[name=popup__form]');
const formPhotoElement = document.querySelector('form[name=popup__photo]');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let profileNameInput = document.querySelector('input[name=profile-name]');
let profileActivityInput = document.querySelector('input[name=profile-activity]');

// popup Add photo

const popupCloseAddPhoto = document.querySelector('.popup__close-add-photo');
const buttonAddPhoto = document.querySelector('.profile__add-button');
const popupAddPhoto = document.querySelector('.popup__add-photo');
const ulPhotoGrid = document.querySelector('.photo__grid');
const itemTemplate = document.querySelector('#photo__item-template').content;
let photoNameInput = document.querySelector('input[name=photo-name]');
let photoLinkInput = document.querySelector('input[name=photo-link]');

// popup Open photo

const popupClosePhoto = document.querySelector('.popup__close-photo');
const popupOpenPhoto = document.querySelector('.popup__open-photo');
const popupTitlePhoto = document.querySelector('.popup__title-photo');
const popupPhoto = document.querySelector('.popup__wide-photo');
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
    const photoItemClone = itemTemplate.querySelector('.photo__item').cloneNode(true);
    const photoItemImgClone = photoItemClone.querySelector('.photo__item-img');
    const photoLike = photoItemClone.querySelector('.photo__item-like');
    const photoDeleteClone = photoItemClone.querySelector('.photo__item-delete');
    photoItemImgClone.src = link;
    photoItemImgClone.textContent = name;
    photoItemImgClone.alt = 'Фото ' + name;

    photoLike.addEventListener('click', (e) => {
        e.target.classList.toggle('photo__item-like_active')
    });
    photoDeleteClone.addEventListener('click', (e) => {
             ulPhotoGrid.removeChild(e.target.parentElement);
    })
    photoItemImgClone.addEventListener('click', (e) => {
      popupOpenPhoto.classList.add('popup__open-photo_open');
      let photoAlt = e.target.alt.split(' ')[1];
      let photoSrc = e.target.src;
      popupTitlePhoto.textContent = photoAlt;
      popupPhoto.src = photoSrc;
    })
    ulPhotoGrid.insertBefore(photoItemClone,ulPhotoGrid.firstChild)
}

// popup Edit profile

buttonEdit.addEventListener('click', () => {
    popup.classList.add('popup_open');
    profileNameInput.value = profileName.textContent;
    profileActivityInput.value = profileActivity.textContent;
    
})
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_open');
})
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = profileNameInput.value;
    profileActivity.textContent = profileActivityInput.value;
    popup.classList.remove('popup_open');
}
formElement.addEventListener('submit', formSubmitHandler)

// popup Add photo

buttonAddPhoto.addEventListener('click', () => {
    popupAddPhoto.classList.add('popup_open');  
})
popupCloseAddPhoto.addEventListener('click', () => {
    popupAddPhoto.classList.remove('popup_open');
    console.log('hello')
})
function formSubmitHandlerAddPhoto (evt) {
    evt.preventDefault(); 
    addOnePhoto(photoNameInput.value, photoLinkInput.value);
    popupAddPhoto.classList.remove('popup_open');
}
formPhotoElement.addEventListener('submit', formSubmitHandlerAddPhoto)

// popup Open photo

popupClosePhoto.addEventListener('click', () => {
  popupOpenPhoto.classList.remove('popup__open-photo_open');
})
