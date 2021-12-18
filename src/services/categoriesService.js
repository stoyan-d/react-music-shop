import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'categories';

export const getAll = () => request.get(`${baseUrl}/${collection}`);

export const create = async (categoryData, token) => {
    let response = await fetch(`${baseUrl}/${collection}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...categoryData})
    });

    let result = await response.json();

    return result;
};

export const update = async (categoryData, categoryId, token) => {
    let response = await fetch(`${baseUrl}/${collection}/${categoryId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...categoryData})
    });

    let result = await response.json();

    return result;
};

export const getOne = (categoryId) => {
    return fetch(`${baseUrl}/${collection}/${categoryId}`)
        .then(res => res.json())
};

export const destroy = (categoryId, token) => {
    return fetch(`${baseUrl}/${collection}/${categoryId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

