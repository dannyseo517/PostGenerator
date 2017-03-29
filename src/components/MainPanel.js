import React, {Component} from 'react'
import { connect } from 'react-redux'
import DigestTemplate from './DigestTemplate'
import ArticleTemplate from './ArticleTemplate'
import WebSiteTemplate from './WebSiteTemplate'
require( '../../public/assets/css/mainpanel.css');

class MainPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            template: <DigestTemplate/>
        };
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
    
    if(state.mainpanel.template == "WebsiteSponsorPost"){
        return{
            template: <WebSiteTemplate />
        }
    }if(state.mainpanel.template == "DigestSponsorPost"){
        return{
            template: <DigestTemplate/>
        }
    }else{
        return{
            template: <WebSiteTemplate />
        }
    }
}

MainPanel = connect(mapStateToProps)(MainPanel)

export default MainPanel;