import React, {Component} from 'react'
import { connect } from 'react-redux'
import DigestTemplate from './DigestTemplate'
import ArticleTemplate from './ArticleTemplate'
import WebSiteTemplate from './WebSiteTemplate'
require( '../../public/assets/css/mainpanel.css');

class MainPanel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            
            <div className="mainpanel">
                {this.props.template}
            </div>
        )
    }
}

const mapStateToProps = state => {
    if(state.template.template == "WebsiteSponsorPost"){
        return{
            template: <WebSiteTemplate />
        }
    }if(state.template.template == "DigestSponsorPost"){
        return{
            template: <DigestTemplate/>
        }
    }
    return{}
}

MainPanel = connect(mapStateToProps)(MainPanel)

export default MainPanel;