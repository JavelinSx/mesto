const enableValidation = {
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
const butonSubmitAddPhoto = formAddPhoto.querySelector(
  enableValidation.submitButtonSelector
);
const allInputFormEdit = formProfileEdit.querySelectorAll(
  enableValidation.inputSelector
);
const allInputFormAddPhoto = formAddPhoto.querySelectorAll(
  enableValidation.inputSelector
);

const validationForm = (form, inputs, submit, handleSubmit) => {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    handleSubmit(evt, form, submit);
  });

  createEventListener(form, inputs, submit);
};

const validForm = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }

  return inputElement.validity.valid;
};

const createEventListener = (form) => {
  const inputsList = Array.from(
    form.querySelectorAll(enableValidation.inputSelector)
  );
  const submitButton = form.querySelector(
    enableValidation.submitButtonSelector
  );
  inputsList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      validForm(form, inputElement);
      toggleButtonState(inputsList, submitButton);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.disabled = true;
  } else {
    // иначе сделай кнопку активной
    buttonElement.disabled = false;
  }
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(enableValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(enableValidation.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorElement.classList.remove(enableValidation.errorClass);
  errorElement.textContent = "";
};

validationForm(
  formEdit,
  allInputFormEdit,
  buttonSubmitFormEdit,
  handleProfileFormSubmit
);
validationForm(
  formAddPhoto,
  allInputFormAddPhoto,
  butonSubmitAddPhoto,
  handleAddCardFormSubmit
);
