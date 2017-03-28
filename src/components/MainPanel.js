import React, {Component} from 'react'
import { connect } from 'react-redux'
import DigestTemplate from './DigestTemplate'
require( '../../public/assets/css/mainpanel.css');

class MainPanel extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            
            <div className="mainpanel">
                <DigestTemplate />
            </div>
        )
    }
}


export default MainPanel;