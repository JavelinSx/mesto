import Popup from "./Popup";


export default class PopupWithImage extends Popup{
    constructor(imageInfo){
        this._link = imageInfo.link;
        this._description = imageInfo.description;
    }
    open(imagePopup, textPopup){
        super.open();
        imagePopup.src = this._link;
        imagePopup.alt = this._description;
        textPopup.textContent = this._description;
    }
}