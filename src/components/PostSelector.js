import React, {Component} from 'react';
import {connect} from 'react-redux'
import PostInputs from './PostInputs';
import {templateType} from '../actions'


class PostSelector extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: <PostInputs />
        };

        this.handleChange = this.handleChange.bind(this);
        this.props.dispatch;
    }

    
    handleChange(event){
        const {dispatch} = this.props
        this.setState({value: event.target.value});
        
        if(event.target.value == "WebsiteSponsorPost"){
            this.state.content = <PostInputs />;
        }
        if(event.target.value == "DigestSponsorPost" || event.target.value == "HeroPlacement"){
            this.state.content = <PostInputs />;
        }
        
        this.props.dispatch(templateType(event.target.value));

    }

    
    
    render(){
        
        return(
            <div className="post-option">
                <select className="form-control" onChange={this.handleChange} value={this.state.value}>
                    <option value="WebsiteSponsorPost">Website Sponsor Post</option>
                    <option value="DigestSponsorPost">Digest Sponsor Post</option>
                    <option value="HeroPlacement">Hero Placement</option>
                </select>
                {this.state.content}
            </div>
            
        );
    }
}

const mapStateToProps = store => {
    return {
    }
}

PostSelector = connect(mapStateToProps)(PostSelector)

export default PostSelector;