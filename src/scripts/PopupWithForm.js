import Popup from './Popup';

export default class PopupWithForm extends Popup{

    constructor(handleSubmit){
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._handleSubmit = handleSubmit
    }

    _getInputValues(){
       return Array.from(this._popupSelector.querySelectorAll('popup_input')) 
    }

    setEventListeners(popup){
        popup.addEventListener('submit', this._handleSubmit)
    }
    close(){
        this.popupSelector.querySelector('name=[popup__form]').reset();
    }
}