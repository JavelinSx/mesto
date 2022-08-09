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
  avatar,
  profileNameSelector,
  profileActivitySelector,
  profileAvatarSelector,
  popupEditSelector,
  popupAddPhotoSelector,
  popupWithImageSelector,
  popupAvatarEditSelector,
  popupConfirmSelector,
  templateCardSelector,
  gallerySelector,
  buttonEdit,
  buttonAddPhoto,
  buttonEditAvatar,
  formPhotoAdd,
  formProfileEdit,
  formAvatarChange,
  inputName,
  inputAbout,
  inputAvatar
} from '../utils/constants.js'


const api = new Api('https://mesto.nomoreparties.co/v1/cohort-46', 'a53b037e-2380-4a96-99e7-f57cd5d08416',)


let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
       .then(([initialCards, userData]) =>{
        userInfo.setUserInfo(userData);
        userId = userData._id;
        cardsList.addItems(initialCards)
       })
       .catch((err) => {
        console.log(`${err}`)
       })

const cardsList = new Section((cardItem) => createCard(cardItem), gallerySelector);

const userInfo = new UserInfo(profileNameSelector, profileActivitySelector, profileAvatarSelector, {inputName, inputAbout, inputAvatar});

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
          console.log(`${err}`)
         })
    },
    handleRemoveLike: (cardId) => {
      api.removeLikeCard(cardId)
        .then((cardInfo) => {
          card.handleLikeCard(cardInfo)
        })
        .catch((err) => {
          console.log(`${err}`)
        })
    },
    handlePossibilityDelete: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.handleRemove(() => {
        api.deleteCard(cardId)
           .then(() => {
            deleteCardPopup.close()
            card.deleteCard()
           })
           .catch((err) => {
            console.log(`${err}`)
          })
      })
    }

  });
  return card.generatedCard();
};

const popupWithFormEdit = new PopupWithForm({
      popupSelector: popupEditSelector,
      handleFormSubmit: (formInput) => {
        popupWithFormEdit.loading(true);
        api.editUserInfo(formInput)
           .then((res) => {
            userInfo.setUserInfo(res),
            popupWithFormEdit.close()
           })
           .catch((err) => {
              console.log(`${err}`)
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
        api.addCard(formInput.name, formInput.link)
           .then((res) => {
            console.log(res)
            cardsList.addItem(res)

            popupWithFormPhoto.close()
           })
           .catch((err) => {
            console.log(`${err}`)
           })
           .finally(() => {
            popupWithFormPhoto.loading(false)
           })
      }
});
popupWithFormPhoto.setEventListeners();


const popupWithFormAvatar = new PopupWithForm({
  popupSelector: popupAvatarEditSelector,
  handleFormSubmit: (formInput) => {
    popupWithFormAvatar.loading(true);
    api.editAvatar(formInput)
       .then((formInput) => {
        avatar.src = formInput.useravatar;
        popupWithFormAvatar.close();
       })
       .catch((err) => {
        console.log(`${err}`)
       })
       .finally(() => {
        popupWithFormPhoto.loading(false)
       })
  }
})
popupWithFormAvatar.setEventListeners();


const deleteCardPopup = new PopupWithConfirm(popupConfirmSelector);
deleteCardPopup.setEventListeners();

const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();



const validationAddPhoto = new FormValidation(validationSelectors, formPhotoAdd);
validationAddPhoto.enableValidation();


const validationEditProfile = new FormValidation(validationSelectors,formProfileEdit);
validationEditProfile.enableValidation();


const validationAvatar = new FormValidation(validationSelectors,formAvatarChange);
validationAvatar.enableValidation();

buttonEdit.addEventListener("click", () => {
  popupWithFormEdit.open();
  userInfo.setUserInfoInput();
  validationEditProfile.clearFormError();
});

buttonAddPhoto.addEventListener("click", () => {
  popupWithFormPhoto.open()
  validationAddPhoto.clearFormError();
});

buttonEditAvatar.addEventListener("click", () => {
  popupWithFormAvatar.open();
  validationAvatar.clearFormError();
})