(()=>{"use strict";var t=document.querySelector(".profile__avatar"),e=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-photo-button"),r=document.querySelector(".profile__edit-button-avatar"),o=document.querySelector(".popup__form-add-photo"),i=document.querySelector(".popup__form-edit"),a=document.querySelector(".popup__form-avatar-change"),u=document.querySelector('[name="username"]'),c=document.querySelector('[name="useractivity"]'),l=document.querySelector('[name="useravatar"]'),s={popupSelector:".popup",formEditSelector:".popup__form-edit",formAddPhotoSelector:".popup__form-add-photo",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error_active",toggleSubmit:"popup__submit-deactive"};function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=p((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"clearFormError",(function(){r._inputs.forEach((function(t){r._hideInputError(t)})),r._toggleButtonState()})),h(this,"_showInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.add(r._errorInvalid),e.textContent=t.validationMessage,e.classList.add(r._error)})),h(this,"_hideInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._errorInvalid),e.classList.remove(r._error),e.textContent=""})),h(this,"enableValidation",(function(){r._inputs.forEach((function(t){return t.addEventListener("input",(function(){r._validForm(t),r._toggleButtonState()}))}))})),h(this,"_validForm",(function(t){return t.validity.valid?r._hideInputError(t):r._showInputError(t),t.validity.valid})),h(this,"_hasInvalidInput",(function(){return r._inputs.some((function(t){return!t.validity.valid}))})),h(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._submit.disabled=!0,r._submit.classList.add(r._toggleSubmit)):(r._submit.disabled=!1,r._submit.classList.remove(r._toggleSubmit))})),this._enableValidation=e,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._enableValidation.inputSelector)),this._submit=this._form.querySelector(this._enableValidation.submitButtonSelector),this._error=this._enableValidation.errorClass,this._errorInvalid=this._enableValidation.inputErrorClass,this._toggleSubmit=this._enableValidation.toggleSubmit}));function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._containerSelector=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItems",value:function(t){var e=this;t.forEach((function(t){e._containerSelector.append(e._renderer(t))}))}},{key:"addItem",value:function(t){this._containerSelector.prepend(this._renderer(t))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=function(){function t(e){var n=this,r=e.data,o=e.templateCardSelector,i=e.userId,a=e.handleCardClick,u=e.handleSetLike,c=e.handleRemoveLike,l=e.handlePossibilityDelete;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"_handleLikeClick",(function(){n._likeButton.classList.toggle("photo__item-like_active")})),v(this,"deleteCard",(function(){n._element.remove(),n._element=null})),this._data=r,this._name=this._data.name,this._link=this._data.link,this._userId=i,this._cardId=this._data._id,this._likes=this._data.likes,this._cardOwner=this._data.owner._id,this._templateCardSelector=o,this._handleCardClick=a,this._handlePossibilityDelete=l,this._handleSetLike=u,this._handleRemoveLike=c}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateCardSelector).content.querySelector(".photo__item").cloneNode(!0)}},{key:"_setEventListener",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._likeButton.classList.contains("photo__item-like_active")?t._handleRemoveLike(t._cardId):t._handleSetLike(t._cardId)})),this._deleteButton.addEventListener("click",(function(){t._handlePossibilityDelete(t._cardId)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._data)}))}},{key:"generatedCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".photo__item-like"),this._likesCount=this._element.querySelector(".photo__item-like-count"),this._deleteButton=this._element.querySelector(".photo__item-delete"),this._cardImage=this._element.querySelector(".photo__item-img"),this._cardTitle=this._element.querySelector(".photo__item-title"),this._setEventListener(),this._isCardLiked(),this._deleteButtonDelete(),this._likesCount.textContent=this._likes.length,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._element}},{key:"_isCardLiked",value:function(){var t=this;this._likes.some((function(e){return t._userId===e._id}))&&this._likeButton.classList.add("photo__item-like_active")}},{key:"_deleteButtonDelete",value:function(){this._userId!==this._cardOwner&&this._deleteButton.remove()}},{key:"handleLikeCard",value:function(t){this._likes=t.likes,this._likesCount.textContent=this._likes.length,this._likeButton.classList.toggle("photo__item-like_active")}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var k=function(){function t(e){var n,r,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(t){"Escape"===t.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupElement=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupElement.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=E(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function j(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function a(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,n))._handleFormSubmit=r,e._form=e._popupElement.querySelector(".popup__form"),e._inputList=Array.from(e._form.querySelectorAll(".popup__input")),e._submitButton=e._form.querySelector(".popup__submit"),e._submitButtonText=e._submitButton.textContent,e}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;O(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){O(L(a.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._submitButtonText}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(k);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=q(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},T.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function x(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return x(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popupElement.querySelector(".popup__photo-wide"),e._text=e._popupElement.querySelector(".popup__photo-title"),e}return e=a,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._image.src=n,this._text.textContent=e,this._image.alt=e,T(A(a.prototype),"open",this).call(this)}},{key:"close",value:function(){T(A(a.prototype),"close",this).call(this)}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(k);function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D(t,e,n){return e&&z(t.prototype,e),n&&z(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var F=D((function t(e,n,r,o){var i=this,a=o.inputName,u=o.inputAbout,c=o.inputAvatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,"getUserInfo",(function(){return{name:i._name.textContent,about:i._activity.textContent,avatar:i._avatar.textContent}})),V(this,"setUserInfo",(function(t){i._name.textContent=t.name,i._activity.textContent=t.about,i._avatar.src=t.avatar})),V(this,"setUserInfoInput",(function(){i._inputName.value=i._name.textContent,i._inputAbout.value=i._activity.textContent,i._inputAvatar.value=i._avatar.src})),this._name=document.querySelector(e),this._activity=document.querySelector(n),this._avatar=document.querySelector(r),this._inputName=a,this._inputAbout=u,this._inputAvatar=c}));function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=M(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},H.apply(this,arguments)}function M(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function $(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(r);if(o){var n=K(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return $(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._form=e._popupElement.querySelector(".popup__form"),e}return e=a,(n=[{key:"handleRemove",value:function(t){this._handleSubmit=t}},{key:"setEventListeners",value:function(){var t=this;H(K(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(e){e.preventDefault(),t._handleSubmit()}))}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(k);function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Y,Z=new(function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e,this._authorization=n}var e,n;return e=t,(n=[{key:"_parseResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then((function(e){return t._parseResponse(e)}))}},{key:"addCard",value:function(t,e){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then((function(t){return n._parseResponse(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._parseResponse(t)}))}},{key:"setLikeCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._parseResponse(t)}))}},{key:"removeLikeCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(t){return e._parseResponse(t)}))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return t._parseResponse(e)}))}},{key:"editUserInfo",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.username,about:t.useractivity})}).then((function(t){return e._parseResponse(t)}))}},{key:"editAvatar",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.useravatar})}).then((function(t){return e._parseResponse(t)}))}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())("https://mesto.nomoreparties.co/v1/cohort-46","a53b037e-2380-4a96-99e7-f57cd5d08416");Promise.all([Z.getInitialCards(),Z.getUserInfo()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];et.setUserInfo(i),Y=i._id,tt.addItems(o)})).catch((function(t){console.log("".concat(t))}));var tt=new y((function(t){return nt(t)}),".photo__grid"),et=new F(".profile__name",".profile__activity",".profile__avatar",{inputName:u,inputAbout:c,inputAvatar:l}),nt=function(t){var e=new b({data:t,templateCardSelector:".photo__item-template",userId:Y,handleCardClick:function(t,e){ut.open(t,e)},handleSetLike:function(t){Z.setLikeCard(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("".concat(t))}))},handleRemoveLike:function(t){Z.removeLikeCard(t).then((function(t){e.handleLikeCard(t)})).catch((function(t){console.log("".concat(t))}))},handlePossibilityDelete:function(t){at.open(),at.handleRemove((function(){Z.deleteCard(t).then((function(){at.close(),e.deleteCard()})).catch((function(t){console.log("".concat(t))}))}))}});return e.generatedCard()},rt=new P({popupSelector:".popup_type_edit-profile",handleFormSubmit:function(t){rt.loading(!0),Z.editUserInfo(t).then((function(t){et.setUserInfo(t),rt.close()})).catch((function(t){console.log("".concat(t))})).finally((function(){rt.loading(!1)}))}});rt.setEventListeners();var ot=new P({popupSelector:".popup_type_add-photo",handleFormSubmit:function(t){ot.loading(!0),Z.addCard(t.name,t.link).then((function(t){console.log(t),tt.addItem(t),ot.close()})).catch((function(t){console.log("".concat(t))})).finally((function(){ot.loading(!1)}))}});ot.setEventListeners();var it=new P({popupSelector:".popup_type_avatar-change",handleFormSubmit:function(e){it.loading(!0),Z.editAvatar(e).then((function(e){t.src=e.useravatar,it.close()})).catch((function(t){console.log("".concat(t))})).finally((function(){ot.loading(!1)}))}});it.setEventListeners();var at=new Q(".popup_type_confirm-action");at.setEventListeners();var ut=new U(".popup_type_photo-open");ut.setEventListeners();var ct=new d(s,o);ct.enableValidation();var lt=new d(s,i);lt.enableValidation();var st=new d(s,a);st.enableValidation(),e.addEventListener("click",(function(){rt.open(),et.setUserInfoInput(),lt.clearFormError()})),n.addEventListener("click",(function(){ot.open(),ct.clearFormError()})),r.addEventListener("click",(function(){it.open(),st.clearFormError()}))})();