import React, {Component} from 'react';
import PostSelector from './PostSelector'
require( '../../public/assets/css/leftpanel.css');

class LeftPanel extends Component{
    constructor(props){
        super(props);
        this.state = {posttext: ''};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event)
    {
        this.setState({value: event.target.posttext});
        alert("The Child text is: " + this.event.target.posttext);
        
    }
    render(){
        return(
            <div className="leftpanel-container">
                <h2>Sponsor Post Generator</h2>
                <PostSelector onChange={this.handleChange} postext={this.state.posttext}/>
            </div>
            
        )
    }
}

export default LeftPanel;