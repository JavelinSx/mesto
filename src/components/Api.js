import { data } from "autoprefixer";

export default class Api{
    constructor(baseUrl, headers){
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _parseResponse(res){
        if(res.ok){
            return res.json();
        }
        return Promise.reject(`ошибка: ${res.status}`);
    }

    getInitialCards(){
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => this._parseResponse(res))
    }

    addCard(){
        return fetch(`${this._baseUrl}/cards`,{
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name:data.name,
                link:data.link
            })
        })
        .then(res => this._parseResponse(res))
    }

    deleteCard(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then(res => this._parseResponse(res))
    }

    setLikeCard(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => this._parseResponse(res))
    }

    removeLikeCard(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
            method: "DELETE",
            headers: this._headers,
        })
        .then(res => this._parseResponse(res))
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'GET',
            headers: this._headers,
        })
        .then(res => this._parseResponse(res))
    }

    editUserInfo(data){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.activity
            })
        })
        .then(res => this._parseResponse(res))
    }

    editAvatar(data){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(res => this._parseResponse(res))
    }
    
}
