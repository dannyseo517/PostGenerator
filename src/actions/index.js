export const addAdSpot = (id, headline, body, image) => {
    return {
        type: 'ADD_ADSPOT',
        id,
        headline,
        body,
        image
    }
}

