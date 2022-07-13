import Popup from "./Popup";
import {imagePopup, textPopup} from './constants.js';

export default class PopupWithImage extends Popup{
    constructor(link, description){
        super()
        this._link = link;
        this._description = description;
    }
    open(){
        imagePopup.src = this._link;
        imagePopup.alt = this._description;
        textPopup.textContent = this._description;
    }
}