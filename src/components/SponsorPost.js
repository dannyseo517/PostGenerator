import React, {Component} from 'react'
import {addAdSpot} from '../actions'
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
        this.handlePreview = this.handlePreview.bind(this);
        this.openFileBrowser = this.openFileBrowser.bind(this);
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
    handlePreview(event){
        const {dispatch} = this.props
        event.preventDefault();
        console.log(document.getElementById((document.getElementById(event.target.id).parentNode.id + '-image')).files[0]);
        this.props.dispatch(addAdSpot(document.getElementById(event.target.id).parentNode.id, 
            this.state.headline1, this.state.body1, document.getElementById((document.getElementById(event.target.id).parentNode.id + '-image')).files[0]));
        
    }
    openFileBrowser(event){
        document.getElementById((document.getElementById(event.target.id).parentNode.id + '-image')).click();
    }
    render(){
        return(
            <div className="kesselWebSP">
                <div id="sp1">
                    <h5>Headline</h5>
                    <input id="sp1-header" type="text" className="form-control" placeholder="Text input" value={this.state.headline1} onChange={this.handleHeadLineChange1}/>
                    <span className="input-note">Characters Left: 60</span>
                
                    <h5>Body</h5>
                    <textarea id="sp1-body" className="form-control" rows="3" value={this.state.body1} onChange={this.handleBodyChange1}></textarea>
                    <span className="input-note">Characters Left: 175</span>
                    <div className="clearfix"></div>
                    
                    <h5>Image</h5>
                    <button id="sp1-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                        <i className="fa fa-upload"></i> Upload Image
                    </button>
                    <input id="sp1-image" style={{display: 'none' }} type='file'/>
                    <span className="input-note">Required Size: 200x200 pixels</span>
                    <button id="sp1-prev" type="button" className="btn btn-success pull-right" onClick={this.handlePreview} >
                        Preview
                    </button>
                </div>
                <div id="sp2">
                    <h5>Headline</h5>
                    <input id="sp2-header" type="text" className="form-control" placeholder="Text input" value={this.state.headline2} onChange={this.handleHeadLineChange2}/>
                    <span className="input-note">Characters Left: 60</span>
                
                    <h5>Body</h5>
                    <textarea id="sp2-body" className="form-control" rows="3" value={this.state.body2} onChange={this.handleBodyChange2}></textarea>
                    <span className="input-note">Characters Left: 175</span>
                    <div className="clearfix"></div>
                    
                    <h5>Image</h5>
                    <button id="sp2-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                        <i className="fa fa-upload"></i> Upload Image
                    </button>
                    <input id="sp2-image" style={{display: 'none' }} type='file'/>
                    <span className="input-note">Required Size: 200x200 pixels</span>
                    <button id="sp2-prev" type="submit" className="btn btn-success pull-right" onClick={this.handlePreview} >
                        Preview
                    </button>
                </div>
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