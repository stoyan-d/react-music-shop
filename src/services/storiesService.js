import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'stories';

export const getOne = (storyId) => {
    return fetch(`${baseUrl}/${collection}/${storyId}`)
        .then(res => res.json())
};

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

export const update = async (storyData, storyId, token) => {
    let response = await fetch(`${baseUrl}/${collection}/${storyId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...storyData})
    });

    let result = await response.json();

    return result;
};

export const destroy = (storyId, token) => {
    return fetch(`${baseUrl}/${collection}/${storyId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

