import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'likes';

export const addLike = (userId, storyId) => request.post(`${baseUrl}/${collection}`, {userId, storyId});
export const getStoriesLikes = (storyId) => {
    const query = encodeURIComponent(`storyId="${storyId}"`);

    return request.get(`${baseUrl}/${collection}?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};