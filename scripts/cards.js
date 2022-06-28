
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 



export class Card{
    constructor(data, cardSelector, handleOpenViewPopup){
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleOpenViewPopup = handleOpenViewPopup;
    }

    _getTemplate(){
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo__item')
      .cloneNode(true)
      return cardElement
    }

    _setEventListener(){
      this._element.querySelector('.photo__item-like').addEventListener('click', () => {
        this._handleLikeClick();
      })
      this._element.querySelector('.photo__item-delete').addEventListener('click', () => {
        this._handleDeleteClick();
      })
      this._element.querySelector('.photo__item-img').addEventListener('click', () => {
        this._handleImageClick();
      })
    }

    _handleLikeClick = () =>{
      this._element.querySelector('.photo__item-like').classList.toggle("photo__item-like_active")
    }
    _handleDeleteClick = () =>{
      this._element.remove();
    }
    _handleImageClick = () =>{
      this._handleOpenViewPopup({name: this._name, link: this._link})
    }
    generatedCard(){
      this._element = this._getTemplate();
      this._setEventListener();
      this._element.querySelector('.photo__item-img').src = this._link;
      this._element.querySelector('.photo__item-title').textContent = this._name;
      return this._element;
    }
  }




