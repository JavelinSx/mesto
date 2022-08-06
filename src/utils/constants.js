
const profileNameSelector = '.profile__name';
const profileActivitySelector = '.profile__activity';
const popupEditSelector = '.popup_type_edit-profile';
const popupAddPhotoSelector = '.popup_type_add-photo';
const popupWithImageSelector = '.popup_photo-open';
const templateCardSelector = '.photo__item-template';
const gallerySelector = '.photo__grid';

export {
  profileNameSelector,
  profileActivitySelector,
  popupEditSelector,
  popupAddPhotoSelector,
  popupWithImageSelector,
  templateCardSelector,
  gallerySelector
}


export const validationSelectors = {
  popupSelector: ".popup",
  formEditSelector: ".popup__form-edit",
  formAddPhotoSelector: ".popup__form-add-photo",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
  toggleSubmit: "popup__submit-deactive",
};



export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
