export const imageArea = document.querySelector(".photo__grid");

export const profileName = document.querySelector(".profile__name");
export const buttonEdit = document.querySelector(".profile__edit-button");
export const profileActivity = document.querySelector(".profile__activity");
export const buttonAddPhoto = document.querySelector(".profile__add-photo-button");
export const popupAddPhoto = document.querySelector(".popup_type_add-photo");
export const popupOpenPhoto = document.querySelector(".popup_photo-open");
export const formProfileEdit = document.querySelector(".popup__form-edit");
export const formPhotoAdd = document.querySelector(".popup__form-add-photo")
export const popupEditProfile = document.querySelector(".popup_type_edit-profile");
export const profileNameInput = formProfileEdit.querySelector("input[name=profile-name]");
export const profileActivityInput = formProfileEdit.querySelector("input[name=profile-activity]");
export const photoNameInput = document.querySelector("input[name=photo-name]");
export const photoLinkInput = document.querySelector("input[name=photo-link]");
export const popupsArray = Array.from(document.querySelectorAll('.popup')); 
export const imagePopup = popupOpenPhoto.querySelector('.popup__photo-wide');
export const textPopup = popupOpenPhoto.querySelector('.popup__photo-title');

