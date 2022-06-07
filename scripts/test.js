const enableValidation = ({
    popupSelector: '.popup',
    formEditSelector: '.popup__form-edit',
    formAddPhotoSelector: '.popup__form-add-photo',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__input-error_active'
  });
  
const validationFormEdit = () => {
    const formEdit = document.querySelector(enableValidation.formEditSelector)


    formEdit.addEventListener('submit', (evt) => {
        evt.preventDefault();
        handleProfileFormSubmit(evt)
    })

    createEventListener(formEdit)

}
const validationFormAddPhoto = () => {
    const formAddPhoto = document.querySelector(enableValidation.formAddPhotoSelector)

    formAddPhoto.addEventListener('submit', (evt) => {
        evt.preventDefault();
        handleAddCardFormSubmit(evt)
    })

    createEventListener(formAddPhoto)

}

const validForm = (formElement, inputElement) => {
    if (inputElement.validity.tooLong) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
    return inputElement.validity.valid
}; 

const createEventListener = (formElement) => {

    const allInputInForm = Array.from(formElement.querySelectorAll(enableValidation.inputSelector))
    const buttonSubmit = formElement.querySelector(enableValidation.submitButtonSelector)

    allInputInForm.forEach((inputElement) => {
        
        inputElement.addEventListener('input', () => {
        disableSubbmitButton(validForm(formElement, inputElement), buttonSubmit)
        })
    })

}

function handleAddCardFormSubmit (evt) {

    evt.preventDefault(); 
    addCard(addOnePhoto(photoNameInput.value, photoLinkInput.value));
    formPhotoElement.reset();
    closePopup(evt.target.closest(enableValidation.popupSelector));
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = profileNameInput.value;
    profileActivity.textContent = profileActivityInput.value;
    closePopup(evt.target.closest(enableValidation.popupSelector));
}

const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(enableValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(enableValidation.errorClass);
};

const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(enableValidation.inputErrorClass);
    errorElement.classList.remove(enableValidation.errorClass);
    errorElement.textContent = '';
};

const disableSubbmitButton = (valid,buttonElement) => {
    if (valid) {
        buttonElement.removeAttribute('disabled')
    }
    else{
        buttonElement.setAttribute('disabled','disabled')
    }
}


validationFormEdit();
validationFormAddPhoto();