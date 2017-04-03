export const addAdSpot = (headline1, body1, image1, headline2, body2, image2, headline3,  body3, image3, headline4, image4) => {
    return {
        type: 'ADD_ADSPOT',
        headline1,headline2,headline3, headline4,
        body1, body2, body3,
        image1, image2, image3, image4
    }
}

export const templateType = (template) =>{
    return {
        type: 'SET_TEMPLATE',
        template
    }
}