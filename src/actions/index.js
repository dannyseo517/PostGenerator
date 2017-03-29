export const addAdSpot = (id, headline, body, image) => {
    return {
        type: 'ADD_ADSPOT',
        id,
        headline,
        body,
        image
    }
}

export const templateType = (template) =>{
    return {
        type: 'SET_TEMPLATE',
        template
    }
}