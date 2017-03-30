import { combineReducers } from 'redux'
import mainpanel from './mainpanel'
import template from './template'

const mainPanelC = combineReducers({
    mainpanel,
    template
})

export default mainPanelC