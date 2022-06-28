import {enableValidation} from './enableValidation.js'


export class Validation{
  constructor(form, inputs, submit, handleSubmit){
    this._form = form;
    this._inputs = Array.from(inputs);
    this._submit = submit;
    this._handleSubmit = handleSubmit;
    
  }
  _showInputError = (elem) => {
    const errorElement = this._form.querySelector(`.${elem.id}-error`);
    elem.classList.add(enableValidation.inputErrorClass);
    errorElement.textContent = elem.validationMessage;
    errorElement.classList.add(enableValidation.errorClass);
    };
  
  _hideInputError = (elem) => {
    const errorElement = this._form.querySelector(`.${elem.id}-error`);
    elem.classList.remove(enableValidation.inputErrorClass);
    errorElement.classList.remove(enableValidation.errorClass);
    errorElement.textContent = "";
    };

  _createEventListener = () => {
    this._inputs.forEach(elem => elem.addEventListener('input', () => {
      this._validForm(elem)
      this._toggleButtonState(this._inputs, this._submit)
    })) 
  }


  _validForm = (elem) => {
    if (!elem.validity.valid) {
      this._showInputError(elem);
    } else {
      this._hideInputError(elem);
    }
    return elem.validity.valid;
  }

  _hasInvalidInput = () => {

      return this._inputs.some((inputElement) => {
        return !inputElement.validity.valid;
      });

  }
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._submit.disabled = true;
    } else {
      this._submit.disabled = false;
    }
  }


}


// const validationForm = (form, inputs, submit, handleSubmit) => {
//   form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     handleSubmit(evt, form, submit);
//   });

//   createEventListener(form, inputs, submit);
// };

// const validForm = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }

//   return inputElement.validity.valid;
// };

// const createEventListener = (form) => {
//   const inputsList = Array.from(
//     form.querySelectorAll(enableValidation.inputSelector)
//   );
//   const submitButton = form.querySelector(
//     enableValidation.submitButtonSelector
//   );
//   inputsList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       validForm(form, inputElement);
//       toggleButtonState(inputsList, submitButton);
//     });
//   });
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {

//   if (hasInvalidInput(inputList)) {
//     buttonElement.disabled = true;
//   } else {
//     buttonElement.disabled = false;
//   }
// };

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(enableValidation.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(enableValidation.errorClass);
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(enableValidation.inputErrorClass);
//   errorElement.classList.remove(enableValidation.errorClass);
//   errorElement.textContent = "";
// };

// validationForm(
//   formEdit,
//   allInputFormEdit,
//   buttonSubmitFormEdit,
//   handleProfileFormSubmit
// );
// validationForm(
//   formAddPhoto,
//   allInputFormAddPhoto,
//   butonSubmitAddPhoto,
//   handleAddCardFormSubmit
// );
