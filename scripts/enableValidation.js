export const enableValidation = {
  popupSelector: ".popup",
  formEditSelector: ".popup__form-edit",
  formAddPhotoSelector: ".popup__form-add-photo",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__input-error_active",
};

const formAddPhoto = document.querySelector(
  enableValidation.formAddPhotoSelector
);
const formProfileEdit = document.querySelector(
  enableValidation.formEditSelector
);
const buttonSubmitFormEdit = formProfileEdit.querySelector(
  enableValidation.submitButtonSelector
);
const buttonSubmitAddPhoto = formAddPhoto.querySelector(
  enableValidation.submitButtonSelector
);
const allInputFormEdit = formProfileEdit.querySelectorAll(
  enableValidation.inputSelector
);
const allInputFormAddPhoto = formAddPhoto.querySelectorAll(
  enableValidation.inputSelector
);

export {formAddPhoto, formProfileEdit, buttonSubmitFormEdit, buttonSubmitAddPhoto, allInputFormEdit, allInputFormAddPhoto}