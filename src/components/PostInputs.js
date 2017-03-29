import React, {Component} from 'react'
import {addAdSpot} from '../actions'
import {connect} from 'react-redux'
require( '../../public/assets/css/postinputs.css');

var MAX_HEADLINE = 60;
var MAX_BODY = 175;

class PostInputs extends Component{
    constructor(props){
        super(props);
        this.state = {
            headline1: '',
            body1: '', 
            image1: '',
            headline2: '',
            body2: '',
            image2: '',
            headline3: '',
            body3: '',
            image3: ''
        }
        this.handleHeadLineChange1 = this.handleHeadLineChange1.bind(this);
        this.handleBodyChange1 = this.handleBodyChange1.bind(this);
        this.handleHeadLineChange2 = this.handleHeadLineChange2.bind(this);
        this.handleBodyChange2 = this.handleBodyChange2.bind(this);
        this.handleHeadLineChange3 = this.handleHeadLineChange3.bind(this);
        this.handleBodyChange3 = this.handleBodyChange3.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.openFileBrowser = this.openFileBrowser.bind(this);
        this.props.dispatch;
        
    }

    handleHeadLineChange1(event){
        if(event.target.value.length <= MAX_HEADLINE){
            this.setState({headline1: event.target.value})
        }
    }
    handleBodyChange1(event){
        if(event.target.value.length <= MAX_BODY){
            this.setState({b1limit: MAX_BODY-event.target.value.length})
            this.setState({body1: event.target.value})
        }
    }
    handleHeadLineChange2(event){
        if(event.target.value.length <= MAX_HEADLINE){
            this.setState({h2limit: MAX_HEADLINE-event.target.value.length})
            this.setState({headline2: event.target.value})
        }
    }
    handleBodyChange2(event){
        if(event.target.value.length <= MAX_BODY){
            this.setState({b2limit: MAX_BODY-event.target.value.length})
            this.setState({body2: event.target.value})
        }
    }
    handleHeadLineChange3(event){
        if(event.target.value.length <= MAX_HEADLINE){
            this.setState({h3limit: MAX_HEADLINE-event.target.value.length})
            this.setState({headline3: event.target.value})
        }
    }
    handleBodyChange3(event){
        if(event.target.value.length <= MAX_BODY){
            this.setState({b3limit: MAX_BODY-event.target.value.length})
            this.setState({body3: event.target.value})
        }
    }
    handlePreview(event){
        const {dispatch} = this.props
        event.preventDefault();
        var h, b;
        var targetid = document.getElementById(event.target.id).parentNode.id;
        if(targetid == "sp1"){h = this.state.headline1; b = this.state.body1}
        if(targetid == "sp2"){h = this.state.headline2; b = this.state.body2}
        if(targetid == "sp3"){h = this.state.headline3; b = this.state.body3}
        
        this.props.dispatch(addAdSpot(targetid, 
            h, b, document.getElementById((document.getElementById(event.target.id).parentNode.id + '-image')).files[0]));
        
    }
    openFileBrowser(event){
        document.getElementById((document.getElementById(event.target.id).parentNode.id + '-image')).click();
    }
    render(){
        return(
            <div className="WebSP">
                <div id="sp1">
                    <h5>Headline</h5>
                    <input id="sp1-header" type="text" className="form-control" placeholder="Text input" value={this.state.headline1} onChange={this.handleHeadLineChange1}/>
                    <span className="input-note" style={{color: this.state.headline1.length==MAX_HEADLINE ? "red" : ""}}>Characters Left: {MAX_HEADLINE-this.state.headline1.length}</span>
                    {this.props.template == "WebsiteSponsorPost"? "" : 
                    <div>
                    <h5>Body</h5>
                    <textarea id="sp1-body" className="form-control" rows="3" value={this.state.body1} onChange={this.handleBodyChange1}></textarea>
                    <span className="input-note"style={{color: this.state.body1.length==MAX_BODY ? "red" : ""}}>Characters Left: {MAX_BODY-this.state.body1.length}</span>
                    </div>
                    }
                    <h5>Image</h5>
                    <button id="sp1-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                        <i className="fa fa-upload"></i> Upload Image
                    </button>
                    <input id="sp1-image" style={{display: 'none' }} type='file'/>
                    <span className="input-note">Required Size: 200x200 pixels</span>
                    <button id="sp1-prev" type="button" className="btn btn-success pull-right" onClick={this.handlePreview} >
                        Preview
                    </button>
                    <div className="clearfix"></div>
                </div>
                
                <div id="sp2">
                    <h5>Headline</h5>
                    <input id="sp2-header" type="text" className="form-control" placeholder="Text input" value={this.state.headline2} onChange={this.handleHeadLineChange2}/>
                    <span className="input-note"style={{color: this.state.headline2.length==MAX_HEADLINE ? "red" : ""}}>Characters Left: {MAX_HEADLINE-this.state.headline2.length}</span>
                
                    <h5>Body</h5>
                    <textarea id="sp2-body" className="form-control" rows="3" value={this.state.body2} onChange={this.handleBodyChange2}></textarea>
                    <span className="input-note"style={{color: this.state.body2.length==MAX_BODY ? "red" : ""}}>Characters Left: {MAX_BODY-this.state.body2.length}</span>

                    <h5>Image</h5>
                    <button id="sp2-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                        <i className="fa fa-upload"></i> Upload Image
                    </button>
                    <input id="sp2-image" style={{display: 'none' }} type='file'/>
                    <span className="input-note">Required Size: 200x200 pixels</span>
                    <button id="sp2-prev" type="submit" className="btn btn-success pull-right" onClick={this.handlePreview} >
                        Preview
                    </button>
                    <div className="clearfix"></div>
                </div>
                {/*Remove on Website Sponsor Post*/}
                {this.props.template == "WebsiteSponsorPost"? "" : 
                <div id="sp3">
                    <h5>Headline</h5>
                    <input id="sp3-header" type="text" className="form-control" placeholder="Text input" value={this.state.headline3} onChange={this.handleHeadLineChange3}/>
                    <span className="input-note"style={{color: this.state.headline3.length==MAX_HEADLINE ? "red" : ""}}>Characters Left: {MAX_HEADLINE-this.state.headline3.length}</span>
                
                    <h5>Body</h5>
                    <textarea id="sp3-body" className="form-control" rows="3" value={this.state.body3} onChange={this.handleBodyChange3}></textarea>
                    <span className="input-note"style={{color: this.state.body3.length==MAX_BODY ? "red" : ""}}>Characters Left: {MAX_BODY-this.state.body3.length}</span>

                    <h5>Image</h5>
                    <button id="sp3-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                        <i className="fa fa-upload"></i> Upload Image
                    </button>
                    <input id="sp3-image" style={{display: 'none' }} type='file'/>
                    <span className="input-note">Required Size: 200x200 pixels</span>
                    <button id="sp3-prev" type="submit" className="btn btn-success pull-right" onClick={this.handlePreview} >
                        Preview
                    </button>
                    <div className="clearfix"></div>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        template: store.mainpanel.template == null ? "WebsiteSponsorPost" : store.mainpanel.template
    }
}

PostInputs = connect(mapStateToProps)(PostInputs)

export default PostInputs