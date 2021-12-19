import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'stories';

export const getAllStories = () => request.get(`${baseUrl}/${collection}`);

export const shareAStory = async (storyData, token) => {
    let response = await fetch(`${baseUrl}/${collection}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...storyData})
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

// export const getOne = (categoryId) => {
//     return fetch(`${baseUrl}/${collection}/${categoryId}`)
//         .then(res => res.json())
// };

// export const destroy = (categoryId, token) => {
//     return fetch(`${baseUrl}/${collection}/${categoryId}`, {
//         method: 'DELETE',
//         headers: {
//             'X-Authorization': token
//         }
//     }).then(res => res.json());
// };

