export default class UserInfo {
  constructor(nameSelector, activitySelector, avatarSelector) {
    this._name = document.querySelector(nameSelector);
    this._activity = document.querySelector(activitySelector);
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo = () => {
      return {
        name: this._name.textContent,
        activity: this._activity.textContent,
        avatar: this._avatar.textContent
      }
  };

  setUserInfo = (data) => {
    this._name.textContent = data.name;
    this._activity.textContent = data.activity;
    this._avatar.textContent = data.avatar;
  };
}
