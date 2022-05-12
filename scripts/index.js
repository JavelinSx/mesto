const buttonEdit = document.querySelector('.profile__edit-button');
const popupCloseLink = document.querySelector('.popup__close-link');
const popupSubmit = document.querySelector('.popup__submit');
const popup = document.querySelector('.popup');

let photoLike = document.querySelector('.photo__item-like');
let profileNameInput = document.querySelector('.popup__name');
let profileActivityInput = document.querySelector('.popup__activity');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');





buttonEdit.addEventListener('click', () => {
    
    popup.classList.remove('popup_close');
    popup.classList.add('popup_open');
    profileNameInput.value = profileName.textContent;
    profileActivityInput.value = profileActivity.textContent;
    
})

popupCloseLink.addEventListener('click', () => {

    popup.classList.remove('popup_open');
    popup.classList.add('popup_close');

})


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = profileNameInput.value;
    profileActivity.textContent = profileActivityInput.value;
    popup.classList.remove('popup_open');
    popup.classList.add('popup_close');
}

popupSubmit.addEventListener('click', formSubmitHandler)


photoLike.addEventListener('click', () => {
    photoLike.classList.add('photo__item-like_active')
})