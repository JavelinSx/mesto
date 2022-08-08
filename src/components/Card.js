export default class Card {
  constructor({data, templateCardSelector, userId, handleCardClick, handleDeleteIconClick, handeSetLike, handleRemoveLike}) {

    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._userId = userId;
    this._cardId = data._id;
    this._likes = data.likes;
    this._cardOwner = data.owner._id;

    this._templateCardSelector = templateCardSelector;

    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleSetLike = handeSetLike;
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
        if(this._deleteButton.classList.contains('.photo__item-like_active')){
            this._handleRemoveLike(this._cardId)
        } else {
            this._handleSetLike(this._cardId)
        }
        
      });

    this._deleteButton
      .addEventListener("click", () => {
        this._handleDeleteIconClick(this._cardId);
      });

    this._cardImage
      .addEventListener("click", () => {
        this._handleCardClick(this._data);
      });
  }

  _handleLikeClick = () => {
    this._likeButton.classList.toggle("photo__item-like_active");
  };
  _handleDeleteClick = () => {
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

  handleLikeCard(cardInfo){
    this._likes = cardInfo.likes;
    this._likesCount.textContent = this._likes.length; 
    this._likeButton.classList.toggle('photo__item-like_active');
  }

  _hasDeleteBtn(){
    if(this._userId !== this._cardOwner){
      this._deleteButton.remove();
    }
  }

}
