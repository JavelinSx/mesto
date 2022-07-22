import Popup from "./Popup";


export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._image = this._popupSelector.querySelector('.popup__photo-wide');
      this._text = this._popupSelector.querySelector('.popup__photo-title');  
    }
  
    open (data) {
      c
      this._image.src = data.link;
      this._text.textContent = data.name;
      this._image.alt = data.name;
      super.open();
    }
  }