export default class Card {
  constructor(data, templateCardSelector, handleCardClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._templateCardSelector.content
      .querySelector(".photo__item")
      .cloneNode(true);
  }

  _setEventListener() {
    this._element
      .querySelector(".photo__item-like")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });

    this._element
      .querySelector(".photo__item-delete")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });

    this._element
      .querySelector(".photo__item-img")
      .addEventListener("click", () => {
        this._handleCardClick(this._data);
      });
  }

  _handleLikeClick = () => {
    this._likeButton.classList.toggle("photo__item-like_active");
  };
  _handleDeleteClick = () => {
    this._element.remove();
  };

  generatedCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".photo__item-like");
    this._setEventListener();
    this._element.querySelector(".photo__item-img").src = this._link;
    this._element.querySelector(".photo__item-title").textContent = this._name;
    return this._element;
  }
}
