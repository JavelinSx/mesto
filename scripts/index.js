const buttonEdit = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('form[name=popup__form]')

let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let profileNameInput = document.querySelector('input[name=profile-name]');
let profileActivityInput = document.querySelector('input[name=profile-activity]');





buttonEdit.addEventListener('click', () => {
    
    popup.classList.add('popup_open');
    profileNameInput.value = profileName.textContent;
    profileActivityInput.value = profileActivity.textContent;
    
})

popupClose.addEventListener('click', () => {

    popup.classList.remove('popup_open');

})


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = profileNameInput.value;
    profileActivity.textContent = profileActivityInput.value;
    popup.classList.remove('popup_open');
}

formElement.addEventListener('submit', formSubmitHandler)

