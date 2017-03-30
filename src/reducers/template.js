const temp = (state = {}, action) => {
    switch(action.type){
        case 'SET_TEMPLATE':
            return {
                template: action.template
            }
        default:
            return state
    }
}

export default temp