import Popup from './Popup';

export default class PopupWithForm extends Popup{

    constructor(popupSelector, handleSubmit){
        super(popupSelector)
        this._handleSubmit = handleSubmit
    }

    _getInputValues(){
       return Array.from(this._popupSelector.querySelectorAll('popup_input')) 
    }

    setEventListeners(){
        this._popupSelector.addEventListener('submit', this._handleSubmit)
    }
    close(){
        this._popupSelector.querySelector('name=[popup__form]').reset();
    }
}