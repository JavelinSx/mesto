import './pages/index.css';

import {
  imageArea,profileName,buttonEdit,profileActivity,buttonAddPhoto,popupAddPhoto,popupOpenPhoto,
  formProfileEdit,formPhotoAdd,popupEditProfile,profileNameInput,profileActivityInput,photoNameInput,
  photoLinkInput,popupsArray,imagePopup,textPopup
} from './scripts/constants.js'

import {FormValidation} from './scripts/FormValidation.js'
import {enableValidation} from './scripts/enableValidation.js'
import {initialCards} from './scripts/initialCards.js'

import Section from './scripts/Section.js'
import Card from './scripts/Card.js'
import Popup from './scripts/Popup.js'


const validationAddPhoto = new FormValidation(enableValidation ,formPhotoAdd);
const validationEditProfile = new FormValidation(enableValidation ,formProfileEdit);


buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileActivityInput.value = profileActivity.textContent;
  validationEditProfile.enableValidation();
  validationEditProfile.clearFormError();
});

buttonAddPhoto.addEventListener("click", () => {
  openPopup(popupAddPhoto);
  validationAddPhoto.enableValidation();
  validationAddPhoto.clearFormError();
});



popupsArray.forEach(popup => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {        
      closePopup(popup);          
    }
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




formPhotoAdd.addEventListener('submit', handleAddCardFormSubmit)
formProfileEdit.addEventListener('submit', handleProfileFormSubmit)

