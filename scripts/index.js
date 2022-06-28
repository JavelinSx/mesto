import {Card, initialCards} from './cards.js'
import {Validation} from './validation.js'
import {formAddPhoto, formProfileEdit, buttonSubmitFormEdit, buttonSubmitAddPhoto, allInputFormEdit, allInputFormAddPhoto} from './enableValidation.js'
const imageArea = document.querySelector(".photo__grid");
const overlays = document.querySelectorAll(".overlay");
// popup Edit profile
const popupCloseEditProfile = document.querySelector(".popup__close-edit-profile");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
// popup Add photo
const buttonAddPhoto = document.querySelector(".profile__add-photo-button");
const popupAddPhoto = document.querySelector(".popup_add-photo");
// popup Open photo
const popupOpenPhoto = document.querySelector(".popup_photo-open");
//forms =>
const formEdit = document.querySelector(".popup__form-edit");
const formPhotoElement = document.querySelector(".popup__form-add-photo");
//form Input =>
const profileNameInput = formEdit.querySelector("input[name=profile-name]");
const profileActivityInput = formEdit.querySelector("input[name=profile-activity]");
const photoNameInput = document.querySelector("input[name=photo-name]");
const photoLinkInput = document.querySelector("input[name=photo-link]");




// popup Edit profile

buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileActivityInput.value = profileActivity.textContent;
  const validationAddPhoto = new Validation(formProfileEdit,allInputFormEdit,buttonSubmitFormEdit);
  validationAddPhoto._createEventListener();
  validationAddPhoto._toggleButtonState();
  
});

popupCloseEditProfile.addEventListener("click", (evt) => {
  closePopup(evt.target.closest(".popup"));
});

// popup Add photo

buttonAddPhoto.addEventListener("click", () => {
  openPopup(popupAddPhoto);
  const validationAddPhoto = new Validation(formAddPhoto,allInputFormAddPhoto,buttonSubmitAddPhoto);
  validationAddPhoto._createEventListener();
  validationAddPhoto._toggleButtonState();

});

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(evt.target.closest(".popup"));
    }
  });
});

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  }
}

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

const handleOpenViewPopup = ({name, link}) => {
  openPopup(popupOpenPhoto)
  const imagePopup = popupOpenPhoto.querySelector('.popup__photo-wide');
  const textPopup = popupOpenPhoto.querySelector('.popup__photo-title');
  imagePopup.src = link;
  imagePopup.alt = name;
  textPopup.textContent = name;
}

const overlayClose = () => {
  Array.from(overlays).forEach((element) => {
    element.addEventListener("click", () => {
      closePopup(element.closest(".popup"));
    });
  });
};
overlayClose();

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const card = new Card({name: photoNameInput.value, link: photoLinkInput.value}, '.photo__item-template', handleOpenViewPopup);
  const cardElement = card.generatedCard();
  imageArea.prepend(cardElement);
  closePopup(formAddPhoto.closest('.popup_open'))
  formAddPhoto.reset();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileActivity.textContent = profileActivityInput.value;
  closePopup(formProfileEdit.closest('.popup_open'));
}



initialCards.forEach((item) => {
  const card = new Card(item, '.photo__item-template', handleOpenViewPopup);
  const cardElement = card.generatedCard();
  imageArea.append(cardElement);
})

formAddPhoto.addEventListener('submit', handleAddCardFormSubmit)
formProfileEdit.addEventListener('submit', handleProfileFormSubmit)
