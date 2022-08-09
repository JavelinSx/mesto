import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor( popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__form');
  }

  handleRemove(removing) {
    this._handleSubmit = removing;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('click', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}