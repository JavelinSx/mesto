export default class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector
    }

    open(){
        this._popupSelector.classList.add("popup_open");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close(){
        this._popupSelector.classList.remove("popup_open");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(){
        if (evt.key === "Escape") {
            this.close(this._popupSelector);
          }
    }

    setEventListeners(popups){
        popups.forEach(popup => {
            popup.addEventListener('click', (event) => {
              if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {        
                this.close(popup)          
              }
            })
          }) 

    }
}