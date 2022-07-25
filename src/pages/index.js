import "./index.css";

import { FormValidation } from "../components/FormValidation.js";
import { validationSelectors } from "../components/constants.js";
import { initialCards } from "../components/constants.js";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo";

import {
  profileNameSelector,
  profileActivitySelector,
  popupEditSelector,
  popupAddPhotoSelector,
  popupWithImageSelector,
  templateCardSelector,
  gallerySelector
} from '../components/constants.js'

const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAddPhoto = document.querySelector(".profile__add-photo-button");
const formPhotoAdd = document.querySelector(".popup__form-add-photo");
const formProfileEdit = document.querySelector(".popup__form-edit");


const validationAddPhoto = new FormValidation(validationSelectors, formPhotoAdd);
validationAddPhoto.enableValidation();
validationAddPhoto.clearFormError();

const validationEditProfile = new FormValidation(validationSelectors,formProfileEdit);
validationEditProfile.enableValidation();
validationEditProfile.clearFormError();

const user = new UserInfo(profileNameSelector, profileActivitySelector);

const popupWithFormEdit = new PopupWithForm(popupEditSelector, (formData) => {
  user.setUserInfo(formData);
});
popupWithFormEdit.setEventListeners();

const popupWithFormPhoto = new PopupWithForm(popupAddPhotoSelector, (formData) => {
  cardsList.addItem(formData);
});
popupWithFormPhoto.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

const createCard = (data) => {
  const card = new Card(data, templateCardSelector, () =>
    popupWithImage.open(data)
  );
  return card.generatedCard();
};

const cardsList = new Section(
  (cardItem) => createCard(cardItem),
  gallerySelector
);
cardsList.addItems(initialCards);

buttonEdit.addEventListener("click", () => {
  popupWithFormEdit.open();

  popupWithFormEdit.setInputValues(user.getUserInfo());
});

buttonAddPhoto.addEventListener("click", () => {
  popupWithFormPhoto.open()

});
