const prev = (state = {}, action) => {
    switch(action.type){
        case 'ADD_HEADLINE':
            return {
                headline: action.headline,
                text: action.text,
            }
        default:
            return state
    }
}

export default prev