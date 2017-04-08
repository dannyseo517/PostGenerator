import React, {Component} from 'react';
import {connect} from 'react-redux'
import PostInputs from './PostInputs';
import {templateType} from '../actions'
import {adSpot} from '../actions'
require( '../../public/assets/css/postinputs.css');

class PostSelector extends Component{
    constructor(props){
        super(props);
        this.state = {
            content: <PostInputs id="wsp"/>
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.props.dispatch;
        this.props.dispatch(templateType("DigestSponsorPost"));
        this.props.dispatch(adSpot("1"))
    }

    
    handleChange(event){
        const {dispatch} = this.props
        this.setState({value: event.target.value});
        
        if(event.target.value == "WebsiteSponsorPost"){
            this.state.content = <PostInputs id="wsp"/>;
        }
        if(event.target.value == "DigestSponsorPost" || event.target.value == "HeroPlacement"){
            this.state.content = <PostInputs id="dsp"/>;
        }
        
        this.props.dispatch(templateType(event.target.value));
    }
    handleRadio(event){
        const {dispatch} = this.props
        this.props.dispatch(adSpot(event.target.value))
    }

    
    
    render(){
        
        return(
            <div className="post-option">
                <select className="form-control" onChange={this.handleChange} value={this.state.value}>
                    <option value="DigestSponsorPost">Digest Sponsor Post</option>
                    <option value="WebsiteSponsorPost">Website Sponsor Post</option>
                    <option value="HeroPlacement">Hero Placement</option>
                </select>
                {this.props.template != "HeroPlacement" ?
                <div className="radios">
                    <h5>Ad Spot</h5>
                    <label className="radio-inline"><input type="radio" value="1" name="optradio" onChange={this.handleRadio} defaultChecked={true}/># 1</label>
                    <label className="radio-inline"><input type="radio" value="2" name="optradio" onChange={this.handleRadio}/># 2</label>
                    <label className="radio-inline"><input type="radio" value="3" name="optradio" onChange={this.handleRadio}/># 3</label>
                </div>
                :
                ""
                }
                {this.state.content}
            </div>
            
        );
    }
}

const mapStateToProps = store => {
    return {
        template: store.template.template
    }
}

PostSelector = connect(mapStateToProps)(PostSelector)

export default PostSelector;