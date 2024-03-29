import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this._submitButton = this._form.querySelector(".popup__submit");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name]
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset()
  }

  loading(isLoading){
      if(isLoading){
        this._submitButton.textContent = 'Сохранение...'
      } else {
        this._submitButton.textContent = this._submitButtonText
      }
  }
}
