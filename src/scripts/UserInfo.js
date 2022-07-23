export default class UserInfo {
  constructor(name, activity) {
    this._name = name;
    this._activity = activity;
  }

  getUserInfo = () => {
    return {
      name: this._name.textContent,
      activity: this._activity.textContent,
    };
  };

  setUserInfo = (data) => {
    this._name.textContent = data["profile-name"];
    this._activity.textContent = data["profile-activity"];
  };
}
