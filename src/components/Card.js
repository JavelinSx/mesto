export default class Card {
  constructor(data, templateCardSelector, handleCardClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
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
        this._handleLikeClick();
      });

    this._deleteButton
      .addEventListener("click", () => {
        this._handleDeleteClick();
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
    this._deleteButton = this._element.querySelector(".photo__item-delete")
    this._cardImage = this._element.querySelector(".photo__item-img")
    this._cardTitle = this._element.querySelector(".photo__item-title")
    this._setEventListener();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    return this._element;
  }
}
