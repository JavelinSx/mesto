const showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add('popup__input_invalid');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove('popup__input_invalid');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };
  
  const validForm = (formElement, inputElement) => {
    if (inputElement.validity.tooLong) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
      }
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
    return inputElement.validity.valid
  }; 
  
  const createEventListener = (formElement) => {
    
    const allInput = Array.from(formElement.querySelectorAll('.popup__input'))
    const buttonSubmit = formElement.querySelector('.popup__submit')
  
    allInput.forEach((inputElement) => {
      
      inputElement.addEventListener('input', () => {
  
        if(validForm(formElement, inputElement)){
          buttonSubmit.removeAttribute('disabled')
        }
        else{
          buttonSubmit.setAttribute('disabled','disabled')
        }
        
  
      })
    })
  }
  
  const validationForm = () => {
    const allForm = Array.from(document.forms) 
    allForm.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if(formElement.name === 'form-edit'){
          handleProfileFormSubmit(evt)
        }
        if(formElement.name === 'form-add-photo'){
          handleAddCardFormSubmit(evt)
        }
      })
      createEventListener(formElement)
    }) 
  }
  
  function handleAddCardFormSubmit (evt) {
    evt.preventDefault(); 
    addCard(addOnePhoto(photoNameInput.value, photoLinkInput.value));
    formPhotoElement.reset();
    closePopup(evt.target.closest('.popup'));
  
  }
  
  function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = profileNameInput.value;
    profileActivity.textContent = profileActivityInput.value;
    closePopup(evt.target.closest('.popup'));
  }
  
  validationForm();