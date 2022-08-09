
export default class Api{
    constructor(baseUrl, authorization){
        this._baseUrl = baseUrl;
        this._authorization = authorization;
    }

    _parseResponse(res){
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards(){
        return fetch(`${this._baseUrl}/cards`, {
            headers: {authorization: this._authorization}
        })
        .then(res => this._parseResponse(res))
    }

    addCard(name, link){
        return fetch(`${this._baseUrl}/cards`,{
            method: 'POST',
            headers: {authorization: this._authorization,
                    'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:name,
                link:link
            })
        })
        .then(res => this._parseResponse(res))
    }

    deleteCard(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {authorization: this._authorization,
                    'Content-Type': 'application/json'}
        })
        .then(res => this._parseResponse(res))
    }

    setLikeCard(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
            method: 'PUT',
            headers: {authorization: this._authorization,
                    'Content-Type': 'application/json'},
        })
        .then(res => this._parseResponse(res))
    }

    removeLikeCard(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
            method: "DELETE",
            headers: {authorization: this._authorization,
                    'Content-Type': 'application/json'},
        })
        .then(res => this._parseResponse(res))
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'GET',
            headers: {authorization: this._authorization},
        })
        .then(res => this._parseResponse(res))
    }

    editUserInfo(data){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.username,
                about: data.useractivity
            })
        })
        .then(res => this._parseResponse(res))
    }

    editAvatar(data){
        return fetch(`${this._baseUrl}/users/me/avatar`,{
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data.useravatar
            })
        })
        .then(res => this._parseResponse(res))
    }
    
}
