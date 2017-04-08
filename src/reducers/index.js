import { combineReducers } from 'redux'
import mainpanel from './mainpanel'
import template from './template'
import adspot from './adspot'

const mainPanelC = combineReducers({
    mainpanel,
    template,
    adspot
})

export default mainPanelC