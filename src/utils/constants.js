
const profileNameSelector = '.profile__name';
const profileActivitySelector = '.profile__activity';
const popupEditSelector = '.popup_type_edit-profile';
const popupAddPhotoSelector = '.popup_type_add-photo';
const popupWithImageSelector = '.popup_type_photo-open';
const templateCardSelector = '.photo__item-template';
const gallerySelector = '.photo__grid';
const profileAvatarSelector = '.profile__avatar';
const popupConfirmSelector = '.popup_type_confirm-action';

const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAddPhoto = document.querySelector(".profile__add-photo-button");
const formPhotoAdd = document.querySelector(".popup__form-add-photo");
const formProfileEdit = document.querySelector(".popup__form-edit");
const formAvatarChange = document.querySelector(".popup__form-avatar-change")

export {
  profileNameSelector,
  profileActivitySelector,
  profileAvatarSelector,
  popupEditSelector,
  popupAddPhotoSelector,
  popupWithImageSelector,
  popupConfirmSelector,
  templateCardSelector,
  gallerySelector,
  buttonEdit,
  buttonAddPhoto,
  formPhotoAdd,
  formProfileEdit,
  formAvatarChange
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


