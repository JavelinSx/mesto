import {Card} from './Card.js'
import {FormValidation} from './FormValidation.js'
import {enableValidation} from './enableValidation.js'
import {initialCards} from './initialCards.js'

const imageArea = document.querySelector(".photo__grid");

const popupCloseEditProfile = document.querySelector(".popup__close-edit-profile");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
const buttonAddPhoto = document.querySelector(".profile__add-photo-button");
const popupAddPhoto = document.querySelector(".popup_type_add-photo");
const popupOpenPhoto = document.querySelector(".popup_photo-open");
const formProfileEdit = document.querySelector(".popup__form-edit");
const formPhotoAdd = document.querySelector(".popup__form-add-photo")
const profileNameInput = formProfileEdit.querySelector("input[name=profile-name]");
const profileActivityInput = formProfileEdit.querySelector("input[name=profile-activity]");
const photoNameInput = document.querySelector("input[name=photo-name]");
const photoLinkInput = document.querySelector("input[name=photo-link]");
const closePopupButtons = Array.from(document.querySelectorAll('.popup__close-button')) ;
const imagePopup = popupOpenPhoto.querySelector('.popup__photo-wide');
const textPopup = popupOpenPhoto.querySelector('.popup__photo-title');




// popup Edit profile

buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileActivityInput.value = profileActivity.textContent;
});

popupCloseEditProfile.addEventListener("click", (evt) => {
  closePopup(evt.target.closest(".popup"));
});


buttonAddPhoto.addEventListener("click", () => {
  openPopup(popupAddPhoto);
});


closePopupButtons.forEach(elem => {
   elem.addEventListener('click', (evt) => {
    closePopup(evt.target.closest(".popup"));
  })
})


function closeByEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_open"));
  }
}

function openPopup(popup) {

  popup.classList.add("popup_open");
  document.addEventListener("keydown", closeByEscape);

}

function closePopup(popup) {

  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closeByEscape);

}

const handleOpenViewPopup = ({name, link}) => {
  openPopup(popupOpenPhoto)
  imagePopup.src = link;
  imagePopup.alt = name;
  textPopup.textContent = name;
}


function handleAddCardFormSubmit(event) {
  event.preventDefault();
  imageArea.prepend(createCard({name: photoNameInput.value, link: photoLinkInput.value}, '.photo__item-template', handleOpenViewPopup));
  closePopup(formPhotoAdd.closest('.popup_open'))
  formPhotoAdd.reset();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileActivity.textContent = profileActivityInput.value;
  closePopup(formProfileEdit.closest('.popup_open'));
}

function createCard(data, cardSelector, handleOpenViewPopup){
  return new Card(data, cardSelector, handleOpenViewPopup).generatedCard();
}

initialCards.forEach((item) => {
  imageArea.append(createCard(item, '.photo__item-template', handleOpenViewPopup));
})

const validationAddPhoto = new FormValidation(enableValidation ,formProfileEdit);
validationAddPhoto.createEventListener();

const validationEditProfile = new FormValidation(enableValidation ,formPhotoAdd);
validationEditProfile.createEventListener();

formPhotoAdd.addEventListener('submit', handleAddCardFormSubmit)
formProfileEdit.addEventListener('submit', handleProfileFormSubmit)
