import "./pages/index.css";

import { FormValidation } from "./scripts/FormValidation.js";
import { enableValidation } from "./scripts/constants.js";
import { initialCards } from "./scripts/constants.js";

import Section from "./scripts/Section.js";
import Card from "./scripts/Card.js";
import Popup from "./scripts/Popup.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo";

const photoCardSection = document.querySelector(".photo__grid");
const profileName = document.querySelector(".profile__name");
const buttonEdit = document.querySelector(".profile__edit-button");
const profileActivity = document.querySelector(".profile__activity");
const buttonAddPhoto = document.querySelector(".profile__add-photo-button");
const popupAddPhoto = document.querySelector(".popup_type_add-photo");
const formPhotoAdd = document.querySelector(".popup__form-add-photo");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const templatePhotoCard = document.querySelector(".photo__item-template");
const popupOpenPhoto = document.querySelector(".popup_photo-open");
const formProfileEdit = document.querySelector(".popup__form-edit");


const validationAddPhoto = new FormValidation(enableValidation, formPhotoAdd);
const validationEditProfile = new FormValidation(enableValidation,formProfileEdit);

const user = new UserInfo(profileName, profileActivity);

const popupEdit = new Popup(popupEditProfile);
const popupWithFormEdit = new PopupWithForm(popupEditProfile, (formData) => {
  user.setUserInfo(formData);
});

const popupPhoto = new Popup(popupAddPhoto);
const popupWithFormPhoto = new PopupWithForm(popupAddPhoto, (formData) => {
  cardsList.addItem(formData);
});

const popupWithImage = new PopupWithImage(popupOpenPhoto);
popupWithImage.setEventListeners();

const createCard = (data) => {
  const card = new Card(data, templatePhotoCard, () =>
    popupWithImage.open(data)
  );
  return card.generatedCard();
};

const cardsList = new Section(
  (cardItem) => createCard(cardItem),
  photoCardSection
);
cardsList.addItems(initialCards);

buttonEdit.addEventListener("click", () => {
  popupEdit.open();
  popupEdit.setEventListeners();

  popupWithFormEdit.setEventListeners();
  popupWithFormEdit.setInputValues(user.getUserInfo());

  validationEditProfile.enableValidation();
  validationEditProfile.clearFormError();
});

buttonAddPhoto.addEventListener("click", () => {
  popupPhoto.open();
  popupPhoto.setEventListeners();
  
  popupWithFormPhoto.setEventListeners();
  validationAddPhoto.enableValidation();
  validationAddPhoto.clearFormError();
});
