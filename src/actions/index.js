export const addAdSpot = (headline1, headline2, headline3, body1, body2, body3, image1, image2, image3) => {
    return {
        type: 'ADD_ADSPOT',
        headline1,headline2,headline3,
        body1, body2, body3,
        image1, image2, image3
    }
}

export const templateType = (template) =>{
    return {
        type: 'SET_TEMPLATE',
        template
    }
}