import "./index.css";

import { validationSelectors } from "../utils/constants.js";

import FormValidation from "../components/FormValidation.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo";
import PopupWithConfirm from "../components/PopupWithConfirm";
import Api from "../components/Api";

import {
  profileNameSelector,
  profileActivitySelector,
  profileAvatarSelector,
  popupEditSelector,
  popupAddPhotoSelector,
  popupWithImageSelector,
  popupConfirmSelector,
  templateCardSelector,
  gallerySelector,
  buttonEdit,
  buttonAddPhoto,
  formPhotoAdd,
  formProfileEdit,
  formAvatarChange
} from '../utils/constants.js'


const api = new Api({
  beseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers:{
    authorization: 'a53b037e-2380-4a96-99e7-f57cd5d08416',
    'Content-Type': 'application/json'
  }

})


const cardsList = new Section(
  (cardItem) => createCard(cardItem),
  gallerySelector
);

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
       .then(([initialCards, userData]) =>{
        userInfo.setUserInfo(userData);
        userId = userData._id;
        cardsList.addItems(initialCards)
       })
       .catch((err) => {
        console.log(`ошибка: ${err}`)
       })



const user = new UserInfo(profileNameSelector, profileActivitySelector, profileAvatarSelector);

const popupWithFormEdit = new PopupWithForm({
      popupSelector: popupEditSelector,
      handleFormSubmit: (formInput) => {
        popupWithFormEdit.loading(true);
        api.getUserInfo(formInput)
           .then((formInput) => {
            userInfo.setUserInfo(formInput),
            popupWithFormEdit.close()
           })
           .catch((err) => {
              console.log(`Ошибка: ${err}`)
           })
           .finally(() => {
            popupWithFormEdit.loading(false)
           })
      }
    });
popupWithFormEdit.setEventListeners();


const popupWithFormPhoto = new PopupWithForm({
      popupSelector: popupAddPhotoSelector,
      handleFormSubmit: (formInput)  => {
        popupWithFormPhoto.loading(true);
        api.addCard(formInput)
           .then((formInput) => {
            cardsList.addItem(createCard(formInput))
            popupWithFormPhoto.close()
           })
           .catch((err) => {
            console.log(`Ошибка: ${err}`)
           })
           .finally(() => {
            popupWithFormEdit.loading(false)
           })
      }
});
popupWithFormPhoto.setEventListeners();


const deleteCardPopup = new PopupWithConfirm(popupConfirmSelector);
deleteCardPopup.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();



const createCard = (data) => {
  const card = new Card({
    data: data,
    templateCardSelector: templateCardSelector,
    userId: userId,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link)
    },
    handleSetLike: (cardId) => {
      api.setLikeCard(cardId)
         .then((cardInfo) => {
            card.handleLikeCard(cardInfo)
         })
         .catch((err) => {
          console.log(`Ошибка: ${err}`)
         })
    },
    handleRemoveLike: (cardId) => {
      api.removeLikeCard(cardId)
        .then((cardInfo) => {
          card.handleLikeCard(cardInfo)
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        })
    },
    handlePossibilityDelete: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.handleRemove(() => {
        api.deleteCard(cardId)
           then(() => {
            deleteCardPopup.close()
            card.deleteCard()
           })
           .catch((err) => {
            console.log(`Ошибка: ${err}`)
          })
      })
    }

  });
  return card.generatedCard();
};




const validationAddPhoto = new FormValidation(validationSelectors, formPhotoAdd);
validationAddPhoto.enableValidation();


const validationEditProfile = new FormValidation(validationSelectors,formProfileEdit);
validationEditProfile.enableValidation();


const validationAvatar = new FormValidation(validationSelectors,formAvatarChange);
validationAvatar.enableValidation();

buttonEdit.addEventListener("click", () => {
  popupWithFormEdit.open();
  popupWithFormEdit.setInputValues(user.getUserInfo());
  validationEditProfile.clearFormError();
});

buttonAddPhoto.addEventListener("click", () => {
  popupWithFormPhoto.open()
  validationAddPhoto.clearFormError();
});