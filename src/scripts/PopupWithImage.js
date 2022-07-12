import Popup from "./Popup";

export default class PopupWithImage extends Popup{
    constructor(containterSelector){
        super(containterSelector)
    }
    super.open(this._containerSelector)
}