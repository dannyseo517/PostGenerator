import React, {Component} from 'react'
import { connect } from 'react-redux'
import DigestTemplate from './DigestTemplate'
import WebSiteTemplate from './WebSiteTemplate'
import HeroTemplate from './HeroTemplate'
require( '../../public/assets/css/mainpanel.css');

class MainPanel extends Component{
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(event){
        console.log("hello");
    }

    render(){
        return (
            
            <div className="mainpanel" style={{overflow:'scroll'}} onScroll={this.handleScroll()} height="200px">
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
    }if(state.template.template == "HeroPlacement"){
        return{
            template: <HeroTemplate />
        }
    }
    return{}
}

MainPanel = connect(mapStateToProps)(MainPanel)

export default MainPanel;