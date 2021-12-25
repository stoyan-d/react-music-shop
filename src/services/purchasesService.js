import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';
const collection = 'purchases';

export const makeAPurchase = async (purchaseData, token) => {
    let response = await fetch(`${baseUrl}/${collection}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...purchaseData})
    });

    let result = await response.json();

    return result;
};

export const getPurchases = (userId) => {
    const query = encodeURIComponent(`_ownerId="${userId}"`);

    return request.get(`${baseUrl}/${collection}?where=${query}`)
        .then(res => res.map(x => x));
};
