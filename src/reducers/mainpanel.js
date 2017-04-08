const prev = (state = {}, action) => {
    switch(action.type){
        case 'ADD_ADSPOT':
            return {
                id: action.id,
                headline: action.headline,
                body: action.body,
                image: action.image,
                url: action.url
            }
        default:
            return state
    }
}

export default prev