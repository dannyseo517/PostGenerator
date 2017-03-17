import React, {Component} from 'react';
import SponsorPost from './SponsorPost';



class PostSelector extends Component{
    constructor(props){
        super(props);
        this.state = {
            headline: '',
            value: '',
            body: ''
        };

        this.handleChange = this.handleChange.bind(this);
        
    }

    
    handleChange(event){
        this.setState({value: event.target.value});
        
        if(event.target.value == "WebsiteSponsorPost"){
            this.state.content = "";
        }
        if(event.target.value == "DigestSponsorPost" || event.target.value == "HeroPlacement"){
            this.state.content = "";
        }
    }

    
    
    render(){
        
        return(
            <div className="post-option">
                <select className="form-control" onChange={this.handleChange} value={this.state.value}>
                    <option value="WebsiteSponsorPost">Website Sponsor Post</option>
                    <option value="DigestSponsorPost">Digest Sponsor Post</option>
                    <option value="HeroPlacement">Hero Placement</option>
                </select>
                <SponsorPost />
            </div>
            
        );
    }
}

export default PostSelector;