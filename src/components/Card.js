export default class Card {
  constructor({data, templateCardSelector, userId, handleCardClick, handleSetLike, handleRemoveLike, handlePossibilityDelete}) {

    this._data = data;
    this._name = this._data.name;
    this._link = this._data.link;
    this._userId = userId;
    this._cardId = this._data._id;
    this._likes = this._data.likes;
    this._cardOwner = this._data.owner._id;

    this._templateCardSelector = templateCardSelector;

    this._handleCardClick = handleCardClick;
    this._handlePossibilityDelete = handlePossibilityDelete;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  _getTemplate() {
    return  document
      .querySelector(this._templateCardSelector)
      .content
      .querySelector(".photo__item")
      .cloneNode(true);
  }

  _setEventListener() {
    this._likeButton
      .addEventListener("click", () => {
        if(this._likeButton.classList.contains('photo__item-like_active')){
            this._handleRemoveLike(this._cardId)
        } else {
            this._handleSetLike(this._cardId)
        }
  
      });

    this._deleteButton
      .addEventListener("click", () => {
        this._handlePossibilityDelete(this._cardId);
      });

    this._cardImage
      .addEventListener("click", () => {
        this._handleCardClick(this._data);
      });
  }

  _handleLikeClick = () => {
    this._likeButton.classList.toggle("photo__item-like_active");
  };
  deleteCard = () => {
    this._element.remove();
    this._element = null;
  };

  generatedCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".photo__item-like");
    this._likesCount = this._element.querySelector(".photo__item-like-count")
    this._deleteButton = this._element.querySelector(".photo__item-delete")
    this._cardImage = this._element.querySelector(".photo__item-img")
    this._cardTitle = this._element.querySelector(".photo__item-title")
    this._setEventListener();
    this._isCardLiked();
    this._deleteButtonDelete();
    this._likesCount.textContent = this._likes.length; 
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    return this._element;
  }

  _isCardLiked(){
    if(this._likes.some((user) => {
      return this._userId === user._id
    })) {
      this._likeButton.classList.add('photo__item-like_active')
    }
  }

  _deleteButtonDelete(){
    if(this._userId !== this._cardOwner){
      this._deleteButton.remove();
    }
  }
  
  handleLikeCard(cardInfo){
    this._likes = cardInfo.likes;
    this._likesCount.textContent = this._likes.length; 
    this._likeButton.classList.toggle('photo__item-like_active');
  }

}
