const prev = (state = {}, action) => {
    switch(action.type){
        case 'ADD_ADSPOT':
            return {
                headline1: action.headline1,
                headline2: action.headline2,
                headline3: action.headline3,
                body1: action.body1,
                body2: action.body2,
                body3: action.body3,
                image1: action.image1,
                image2: action.image2,
                image3: action.image3
            }
        default:
            return state
    }
}

export default prev