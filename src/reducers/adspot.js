const adspot = (state = {}, action) => {
    switch(action.type){
        case 'SET_SPOT':
            return {
                spot: action.spot
            }
        default:
            return state
    }
}

export default adspot