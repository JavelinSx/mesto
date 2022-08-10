export default class UserInfo {
  constructor(nameSelector, activitySelector, avatarSelector,{inputName, inputAbout, inputAvatar}) {
    this._name = document.querySelector(nameSelector);
    this._activity = document.querySelector(activitySelector);
    this._avatar = document.querySelector(avatarSelector);
    this._inputName = inputName;
    this._inputAbout = inputAbout;
    this._inputAvatar = inputAvatar;
  }

  getUserInfo = () => {
      return {
        name: this._name.textContent,
        about: this._activity.textContent,
        avatar: this._avatar.textContent
      }
  };

  setUserInfo = (data) => {
    this._name.textContent = data.name;
    this._activity.textContent = data.about;
  };

  setUserInfoInput = () => {
    this._inputName.value = this._name.textContent;
    this._inputAbout.value = this._activity.textContent;
    this._inputAvatar.value = this._avatar.src;
  }
  setUserAvatar = (data) => {
    this._avatar.src = data.avatar;
  }
}
