const initialCards = [
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

const imageArea = document.querySelector('.photo__grid');
const popupPhoto = document.querySelector(".popup_photo-open");

  class Card{
    constructor(data, cardSelector){
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
    }

    _getTemplate(){
      const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo__item')
      .cloneNode(true)
      return cardElement
    }


    // photoLike.addEventListener("click", (evt) => {
    //   evt.target.classList.toggle("photo__item-like_active");
    // });
    // photoDeleteClone.addEventListener("click", (evt) => {
    //   evt.target.closest(".photo__item").remove();
    // });
    // photoItemImgClone.addEventListener("click", (evt) => {
    //   openPopup(popupOpenPhoto);
    //   const photoAlt = photoItemImgClone.alt.split(" ")[1];
    //   const photoSrc = photoItemImgClone.src;
    //   popupTitlePhoto.textContent = photoAlt;
    //   popupPhoto.src = photoSrc;
    //   popupPhoto.alt = evt.target.alt;
    // });
    _setEventListener(){
      this._element.querySelector('.photo__item-like').addEventListener('click', () => {
        this._handleLikeClick();
      })
      this._element.querySelector('.photo__item-delete').addEventListener('click', () => {
        this._handleDeleteClick();
      })
      this._element.querySelector('.photo__item-img').addEventListener('click', () => {
        this._handleOpenPopup();
      })
      popupPhoto.querySelector('.popup__close-button').addEventListener('click', () => {
        this._handleClosePopup();
      })
    }

    _handleLikeClick(){
      this._element.querySelector('.photo__item-like').classList.toggle("photo__item-like_active")
      console.log(this._element.querySelector('.photo__item-like').classList)
    }
    _handleDeleteClick(){
      this._element.remove();
    }
    _handleOpenPopup(){
      openPopup(popupPhoto)
      const imagePopup = popupPhoto.querySelector('.popup__photo-wide');
      const textPopup = popupPhoto.querySelector('.popup__photo-title');
      imagePopup.src = this._link;
      imagePopup.alt = this._name;
      textPopup.textContent = this._name;
    }
    _handleClosePopup(){
      closePopup(popupPhoto)

    }
    generatedCard(){
      this._element = this._getTemplate();
      this._setEventListener();
      this._element.querySelector('.photo__item-img').src = this._link;
      this._element.querySelector('.photo__item-title').textContent = this._name;
      return this._element;
    }
  }

  initialCards.forEach((item) => {
      const card = new Card(item, '.photo__item-template')
      const cardElement = card.generatedCard();
      imageArea.append(cardElement);
  })


  function openPopup(popup) {

    popup.classList.add("popup_open");
    popup.querySelector(".overlay").classList.add("overlay_active");
    document.addEventListener("keydown", closeByEscape);
  
  }
  function closePopup(popup) {

    popup.classList.remove("popup_open");
    popup.querySelector(".overlay").classList.remove("overlay_active");
    document.removeEventListener("keydown", closeByEscape);
  
  }

  function closeByEscape(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_open");
      closePopup(openedPopup);
    }
  }