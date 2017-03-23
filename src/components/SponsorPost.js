import React, {Component} from 'react'
import {addAdSpot1, addAdSpot2} from '../actions'
import {connect} from 'react-redux'

class SponsorPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            headline1: '',
            body1: '', 
            image1: '',
            headline2: '',
            body2: '',
            image2: ''
        }
        this.handleHeadLineChange1 = this.handleHeadLineChange1.bind(this);
        this.handleBodyChange1 = this.handleBodyChange1.bind(this);
        this.handleHeadLineChange2 = this.handleHeadLineChange2.bind(this);
        this.handleBodyChange2 = this.handleBodyChange2.bind(this);
        this.handlePreview1 = this.handlePreview1.bind(this);
        this.handlePreview2 = this.handlePreview2.bind(this);

        this.props.dispatch;
    }

    handleHeadLineChange1(event){
        this.setState({headline1: event.target.value})
    }
    handleBodyChange1(event){
        this.setState({body1: event.target.value})
    }
    handleHeadLineChange2(event){
        this.setState({headline2: event.target.value})
    }
    handleBodyChange2(event){
        this.setState({body2: event.target.value})
    }
    handlePreview1(event){
        const {dispatch} = this.props
        event.preventDefault();
        this.props.dispatch(addAdSpot1(this.state.headline1, this.state.body1));
    }
    handlePreview2(event){
        const {dispatch} = this.props
        event.preventDefault();
        this.props.dispatch(addAdSpot2(this.state.headline2, this.state.body2));
    }
    render(){
        return(
            <div className="kesselWebSP">
                <h5>Headline</h5>
                <input type="text" className="form-control" placeholder="Text input" value={this.state.headline1} onChange={this.handleHeadLineChange1}/>
                <span className="input-note">Characters Left: 60</span>
            
                <h5>Body</h5>
                <textarea className="form-control" rows="3" value={this.state.body1} onChange={this.handleBodyChange1}></textarea>
                <span className="input-note">Characters Left: 175</span>
                <div className="clearfix"></div>
                
                <h5>Image</h5>
                <a href="#" className="btn btn-primary btn-block">
                <i className="fa fa-upload"></i> Upload Image
                </a>
                <span className="input-note">Required Size: 200x200 pixels</span>
                <button type="submit" className="btn btn-success pull-right" onClick={this.handlePreview1} >
                    Preview
                </button>
                <h5>Headline</h5>
                <input type="text" className="form-control" placeholder="Text input" value={this.state.headline2} onChange={this.handleHeadLineChange2}/>
                <span className="input-note">Characters Left: 60</span>
            
                <h5>Body</h5>
                <textarea className="form-control" rows="3" value={this.state.body2} onChange={this.handleBodyChange2}></textarea>
                <span className="input-note">Characters Left: 175</span>
                <div className="clearfix"></div>
                
                <h5>Image</h5>
                <a href="#" className="btn btn-primary btn-block">
                <i className="fa fa-upload"></i> Upload Image
                </a>
                <span className="input-note">Required Size: 200x200 pixels</span>
                <button type="submit" className="btn btn-success pull-right" onClick={this.handlePreview2} >
                    Preview
                </button>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        prev: store.mainpanel.text
    }
}

SponsorPost = connect(mapStateToProps)(SponsorPost)

export default SponsorPost