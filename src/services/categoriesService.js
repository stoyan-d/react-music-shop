import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'categories';

export const getAll = () => request.get(`${baseUrl}/${collection}`);

// export const getMyPets = (ownerId) => {
//     let query = encodeURIComponent(`_ownerId="${ownerId}"`);

//     return request.get(`${baseUrl}/pets?where=${query}`);
// };

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

export const getOne = (categoryId, signal) => {
    return fetch(`${baseUrl}/${collection}/${categoryId}`, { signal })
        .then(res => res.json())
};

export const destroy = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

