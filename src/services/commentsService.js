import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'comments';

export const addComment = (userId, storyId, commentData) => request.post(`${baseUrl}/${collection}`, {userId, storyId, commentData});
export const getComments = (storyId) => {
    const query = encodeURIComponent(`storyId="${storyId}"`);

    return request.get(`${baseUrl}/${collection}?where=${query}`)
        .then(res => res.map(x => x));
};