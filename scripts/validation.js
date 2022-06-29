
export class Validation{

  constructor(enableValidation, form){
    this._form = form;
    this._inputs = Array.from(form.querySelectorAll(enableValidation.inputSelector));
    this._submit = form.querySelector(enableValidation.submitButtonSelector)  
    this._error = enableValidation.errorClass;
    this._errorInvalid = enableValidation.inputErrorClass;
    this._toggleSubmit = enableValidation.toggleSubmit;
  }

  _showInputError = (elem) => {
    const errorElement = this._form.querySelector(`.${elem.id}-error`);
    elem.classList.add(this._errorInvalid);
    errorElement.textContent = elem.validationMessage;
    errorElement.classList.add(this._error);
    };
  
  _hideInputError = (elem) => {
    const errorElement = this._form.querySelector(`.${elem.id}-error`);
    elem.classList.remove(this._errorInvalid);
    errorElement.classList.remove(this._error);
    errorElement.textContent = "";
    };

  createEventListener = () => {
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
      this._submit.classList.add(this._toggleSubmit)
      
    } else {
      this._submit.disabled = false;
      this._submit.classList.remove(this._toggleSubmit)
    }
  }

}