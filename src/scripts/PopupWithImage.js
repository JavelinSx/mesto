import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupSelector.querySelector(".popup__photo-wide");
    this._text = this._popupSelector.querySelector(".popup__photo-title");
  }

  open({ name, link }) {
    this._image.src = link;
    this._text.textContent = name;
    this._image.alt = name;
    super.open();
  }
  close() {
    super.close();
  }
}
