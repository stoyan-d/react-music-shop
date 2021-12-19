import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'userMessages';

export const sendAMessage = async (userData, token) => {
    let response = await fetch(`${baseUrl}/${collection}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...userData})
    });

    let result = await response.json();

    return result;
};


export const like = (petId, pet, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(pet)
    }).then(res => res.json());
};