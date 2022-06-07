const popupClose = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const overlays = document.querySelectorAll(".overlay");
const popupOpen = document.querySelector(".popup_open");
// popup Edit profile

const popupCloseEditProfile = document.querySelector(
  ".popup__close-edit-profile"
);
const popupEditProfile = document.querySelector(".popup_edit-profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");

// popup Add photo

const popupCloseAddPhoto = document.querySelector(".popup__close-add-photo");
const buttonAddPhoto = document.querySelector(".profile__add-photo-button");
const popupAddPhoto = document.querySelector(".popup_add-photo");
const ulPhotoGrid = document.querySelector(".photo__grid");
const itemTemplate = document.querySelector("#photo__item-template").content;

// popup Open photo

const popupClosePhoto = document.querySelector(".popup__close-photo");
const popupOpenPhoto = document.querySelector(".popup_photo-open");
const popupTitlePhoto = document.querySelector(".popup__photo-title");
const popupPhoto = document.querySelector(".popup__photo-wide");
const photoTitle = document.querySelector(".photo__item-title");

//-----------------

//forms =>

const formEdit = document.querySelector(".popup__form-edit");
const formPhotoElement = document.querySelector(".popup__form-add-photo");

//----------------<=

//form Input =>

const profileNameInput = formEdit.querySelector("input[name=profile-name]");
const profileActivityInput = formEdit.querySelector(
  "input[name=profile-activity]"
);
const photoNameInput = document.querySelector("input[name=photo-name]");
const photoLinkInput = document.querySelector("input[name=photo-link]");

//---------------<=

// work of photo

// popup Edit profile

buttonEdit.addEventListener("click", () => {
  openPopup(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileActivityInput.value = profileActivity.textContent;
});

popupCloseEditProfile.addEventListener("click", (evt) => {
  closePopup(evt.target.closest(".popup"));
});

// popup Add photo

buttonAddPhoto.addEventListener("click", () => {
  openPopup(popupAddPhoto);
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

function addAllPhoto(array) {
  for (item of array) {
    addCard(addOnePhoto(item.name, item.link));
  }
}

addAllPhoto(initialCards);

function addOnePhoto(name, link) {
  const photoItemClone = itemTemplate
    .querySelector(".photo__item")
    .cloneNode(true);
  const photoItemTitleClone =
    photoItemClone.querySelector(".photo__item-title");
  const photoItemImgClone = photoItemClone.querySelector(".photo__item-img");
  const photoLike = photoItemClone.querySelector(".photo__item-like");
  const photoDeleteClone = photoItemClone.querySelector(".photo__item-delete");
  photoItemImgClone.src = link;
  photoItemTitleClone.textContent = name;
  photoItemImgClone.alt = "Фото " + name;

  photoLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("photo__item-like_active");
  });
  photoDeleteClone.addEventListener("click", (evt) => {
    evt.target.closest(".photo__item").remove();
  });
  photoItemImgClone.addEventListener("click", (evt) => {
    openPopup(popupOpenPhoto);
    const photoAlt = photoItemImgClone.alt.split(" ")[1];
    const photoSrc = photoItemImgClone.src;
    popupTitlePhoto.textContent = photoAlt;
    popupPhoto.src = photoSrc;
    popupPhoto.alt = evt.target.alt;
  });
  return photoItemClone;
}

function addCard(card) {
  ulPhotoGrid.prepend(card);
}

function openPopup(popup) {
  popup.classList.add("popup_open");
  popup.querySelector(".overlay").classList.add("overlay_active");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  const submitButton = popup.querySelector(
    enableValidation.submitButtonSelector
  );
  popup.classList.remove("popup_open");
  popup.querySelector(".overlay").classList.remove("overlay_active");
  submitButton.setAttribute("disabled", "disabled");
  document.removeEventListener("keydown", closeByEscape);
}

const overlayClose = () => {
  Array.from(overlays).forEach((element) => {
    element.addEventListener("click", () => {
      closePopup(element.closest(".popup"));
    });
  });
};
overlayClose();

function handleAddCardFormSubmit(evt, form) {
  evt.preventDefault();
  addCard(addOnePhoto(photoNameInput.value, photoLinkInput.value));
  form.reset();
  closePopup(evt.target.closest(enableValidation.popupSelector));
}

function handleProfileFormSubmit(evt, form) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  form.textContent = profileActivityInput.value;
  form.reset();
  closePopup(evt.target.closest(enableValidation.popupSelector), evt.submitter);
}
