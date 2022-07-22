export default class UserInfo{
    constructor(userInfo){
        this._name = userInfo.name;
        this._info  = userInfo.info;

    }

    getUserInfo = () => {
        return {name:this._name.textContent, 
                info:this._info.textContent}
    }

    setUserInfo = (inputs) => {

        
        this._name.textContent = inputs.name.value;
        this._info.textContent = inputs.info.value;

    }
}