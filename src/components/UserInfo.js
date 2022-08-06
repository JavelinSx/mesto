export default class UserInfo {
  constructor(name, activity) {
    this._name = document.querySelector(name);
    this._activity = document.querySelector(activity);
  }

  getUserInfo = () => {
    return {
      name: this._name.textContent,
      activity: this._activity.textContent,
    };
  };

  setUserInfo = (data) => {
    this._name.textContent = data["name"];
    this._activity.textContent = data["activity"];
  };
}
