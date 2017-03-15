import React, {Component} from 'react';
import PostSelector from './PostSelector'
require( '../../public/assets/css/leftpanel.css');

class LeftPanel extends Component{
    render(){
        return(
            <div className="">
                <div className="leftpanel-container">
                    <h2>Sponsor Post Generator</h2>
                    <PostSelector/>
                </div>
            </div>
        )
    }
}

export default LeftPanel;