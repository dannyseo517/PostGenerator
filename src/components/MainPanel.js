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
                "this is the main panel"
                {this.props.headline1} 
                {this.props.body1}
                {this.props.headline2} 
                {this.props.body2}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return{
        headline1: state.mainpanel.headline1,
        body1: state.mainpanel.body1,
        headline2: state.mainpanel.headline2,
        body2: state.mainpanel.body2
    }
    
}

MainPanel = connect(mapStateToProps)(MainPanel)

export default MainPanel;