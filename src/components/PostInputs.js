import React, {Component} from 'react'
import {addAdSpot} from '../actions'
import {connect} from 'react-redux'
require( '../../public/assets/css/postinputs.css');

var MAX_HEADLINE = 60;
var MAX_BODY = 175;

function checkFileDimensions(file, callback){
    var fr = new FileReader;
    fr.onload = function() { // file is loaded
        var img = new Image;
        img.onload = function() {
            if(img.width == img.height){
                if(callback){callback("true")}
            }else{
                if(callback){callback("false")}
            }
        };
        img.src = fr.result; // is the data URL because called with readAsDataURL
    };
    fr.readAsDataURL(file);
}

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
            image3: '',
            headline4: '',
            image4: '',
            image1error: '', image2error: '', image3error: ''

        }
        this.handleHeadLineChange1 = this.handleHeadLineChange1.bind(this);
        this.handleBodyChange1 = this.handleBodyChange1.bind(this);
        this.handleHeadLineChange2 = this.handleHeadLineChange2.bind(this);
        this.handleBodyChange2 = this.handleBodyChange2.bind(this);
        this.handleHeadLineChange3 = this.handleHeadLineChange3.bind(this);
        this.handleHeadLineChange4 = this.handleHeadLineChange4.bind(this);
        this.handleBodyChange3 = this.handleBodyChange3.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
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
    handleHeadLineChange4(event){
        if(event.target.value.length <= MAX_HEADLINE){
            this.setState({h4limit: MAX_HEADLINE-event.target.value.length})
            this.setState({headline4: event.target.value})
        }
    }
    handlePreview(event){
        const {dispatch} = this.props
        event.preventDefault();
        this.props.dispatch(addAdSpot(this.state.headline1, this.state.body1, this.state.image1,
                                      this.state.headline2, this.state.body2, this.state.image2,
                                      this.state.headline3, this.state.body3, this.state.image3,
                                      this.state.headline4, this.state.image4));
        
    }
    openFileBrowser(event){
        document.getElementById((document.getElementById(event.target.id).parentNode.id + '-image')).click();
    }
    
    handleImageChange(event){
        var that = this;
        var file = event.target.files[0];
        var target = event.target.id;
        
        
        checkFileDimensions(event.target.files[0], function(ret){
            
            if(ret == "true"){
                if(target.includes("sp1")){that.setState({image1: file, image1error: ""})}
                if(target.includes("sp2")){that.setState({image2: file, image2error: ""})}
                if(target.includes("sp3")){that.setState({image3: file, image3error: ""})}
                if(target.includes("hp1")){that.setState({image4: file, image4error: ""})}
            }
            else{
                if(target.includes("sp1")){that.setState({image1: "", image1error: "image must be square"})}
                if(target.includes("sp2")){that.setState({image2: "", image2error: "image must be square"})}
                if(target.includes("sp3")){that.setState({image3: "", image3error: "image must be square"})}
                if(target.includes("hp1")){that.setState({image4: "", image4error: "image must be square"})}
            }
            
        })
            
        
        
    }
    
    render(){
        return(
            <div className="WebSP">
                
                {/*Remove on Hero Post*/}
                {this.props.template == "HeroPlacement"? 
                <div>
                    <div id="hp1">
                        <h5>Headline</h5>
                        <input id="hp1-header" type="text" className="form-control" placeholder="Text input" value={this.state.headline4} onChange={this.handleHeadLineChange4}/>
                        <span className="input-note" style={{color: this.state.headline4.length==MAX_HEADLINE ? "red" : ""}}>Characters Left: {MAX_HEADLINE-this.state.headline4.length}</span>
                        
                        <h5>Image</h5>
                        <button id="hp1-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                            <i className="fa fa-upload"></i> Upload Image
                        </button>
                        <input id="hp1-image" style={{display: 'none' }} type='file' onChange={this.handleImageChange}/>
                        <span className="input-note">{this.state.image4.name}</span>
                        <span className="input-note">Required Size: 800x800 pixels</span>
                        
                        <div className="clearfix"></div>
                    </div> 
                </div>
                : 
                <div>
                    <div id="sp1">
                        <h5>Headline</h5>
                        <input id="sp1-header" type="text" className="form-control" placeholder="Text input" value={this.state.headline1} onChange={this.handleHeadLineChange1}/>
                        <span className="input-note" style={{color: this.state.headline1.length==MAX_HEADLINE ? "red" : ""}}>Characters Left: {MAX_HEADLINE-this.state.headline1.length}</span>
                        
                        <h5>Body</h5>
                        <textarea id="sp1-body" className="form-control" rows="3" value={this.state.body1} onChange={this.handleBodyChange1}></textarea>
                        <span className="input-note"style={{color: this.state.body1.length==MAX_BODY ? "red" : ""}}>Characters Left: {MAX_BODY-this.state.body1.length}</span>
                        
                        <h5>Image</h5>
                        <button id="sp1-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                            <i className="fa fa-upload"></i> Upload Image
                        </button>
                        <input id="sp1-image" style={{display: 'none' }} type='file' onChange={this.handleImageChange}/>
                        <span className="input-note">{this.state.image1.name}</span>
                        <span className="input-note" style={{color:'red'}}>{this.state.image1error}</span>
                        <span className="input-note">Required Size: 100x100 pixels</span>
                        
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
                        <input id="sp2-image" style={{display: 'none' }} type='file' onChange={this.handleImageChange}/>
                        <span className="input-note">{this.state.image2.name}</span>
                        <span className="input-note">Required Size: 100x100 pixels</span>
                        <div className="clearfix"></div>
                    </div>
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
                        <input id="sp3-image" style={{display: 'none' }} type='file' onChange={this.handleImageChange}/>
                        <span className="input-note">{this.state.image3.name}</span>
                        <span className="input-note">Required Size: 100x100 pixels</span>
                        <div className="clearfix"></div>
                    </div>
                </div>
                }

                <button id="sp1-prev" type="button" className="btn btn-success btn-block" onClick={this.handlePreview} >
                    Preview
                </button>
                <button id="sp1-submit" type="button" className="btn btn-success btn-block" onClick={this.handlePreview} >
                    Send
                </button>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        template: store.template.template == null ? "WebsiteSponsorPost" : store.template.template
    }
}

PostInputs = connect(mapStateToProps)(PostInputs)

export default PostInputs