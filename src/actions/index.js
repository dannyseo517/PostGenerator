let idcount = 0

export const addAdSpot = (headline, body, image,url) => {
    return {
        type: 'ADD_ADSPOT',
        id: idcount++,  
        headline,
        body,
        image,
        url
    }
}

export const templateType = (template) =>{
    return {
        type: 'SET_TEMPLATE',
        template
    }
}

export const adSpot = (spot) =>{
    return {
        type: 'SET_SPOT',
        spot
    }
}