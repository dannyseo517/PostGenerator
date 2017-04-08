import React, {Component} from 'react'
import {addAdSpot} from '../actions'
import {connect} from 'react-redux'
import CustomModal from './SendModal'
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
            headline: '',
            body: '',
            image: '',
            url: '',
            imageerror: '', herr: '', berr: '', lerr: '', ierr:'',
            imagebool: false

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.openFileBrowser = this.openFileBrowser.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.props.dispatch;
    }

    handleInputChange(event){
        if(event.target.id == "headline"){
            if(event.target.value.length <= MAX_HEADLINE){
                this.setState({headline: event.target.value})
                this.setState({herr: ""});
            }
        }
        if(event.target.id =="body"){
            if(event.target.value.length <= MAX_BODY){
                this.setState({body: event.target.value})
                this.setState({berr: ""})
            }
        }
        if(event.target.id == "url"){
            this.setState({url: event.target.value})
            this.setState({lerr: ""})
        }
    
    }

    handlePreview(event){
        const {dispatch} = this.props
        this.props.dispatch(addAdSpot(this.state.headline, this.state.body, this.state.image, this.state.url));
        
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
                that.setState({image: file, imageerror: "",ierr: "", imagebool: true})
            }
            else{
                that.setState({image: "", imageerror: "image must be square", imagebool: false})
            }
            
        })
    }

    validateInputs(){
        if(this.state.headline.trim() == "" || this.state.body.trim() == "" || this.state.imagebool == false || this.state.url.trim() == ""){
            if(this.state.headline.trim() == ""){
                this.setState({herr: "Please insert a headline text"});
            }
            if(this.state.body.trim() == ""){
                this.setState({berr: "Please insert a body text"});
            }
            if(this.state.url.trim() == ""){
                this.setState({lerr: "Please insert a link"});
            }
            if(this.state.imagebool == false){
                this.setState({ierr: "Please insert a image"});
            }
            return false;
        }
        
        return true;
    }

    render(){
        return(
            <div className="WebSP">
                <div>
                    <div id="sp1">
                        <h5>Headline</h5>
                        <input id="headline" type="text" className="form-control" placeholder="Text input" value={this.state.headline} onChange={this.handleInputChange}/>
                        <span className="errormsg">{this.state.herr}</span>
                        <span className="input-note" style={{color: this.state.headline.length==MAX_HEADLINE ? "red" : ""}}>Characters Left: {MAX_HEADLINE-this.state.headline.length}</span>
                        {this.props.template != "HeroPlacement" ?
                        <div id="body">
                            <h5>Body</h5>
                            <textarea id="body" className="form-control" rows="3" value={this.state.body} onChange={this.handleInputChange}></textarea>
                            <span className="errormsg">{this.state.berr}</span>
                            <span className="input-note"style={{color: this.state.body.length==MAX_BODY ? "red" : ""}}>Characters Left: {MAX_BODY-this.state.body.length}</span>
                        </div>
                        :
                        ""}
                        <h5>Click-Thru URL</h5>
                        <input id="url" type="text" className="form-control" placeholder="Text input" value={this.state.url} onChange={this.handleInputChange}/>
                        <span className="errormsg">{this.state.lerr}</span>

                        <h5>Image</h5>
                        <button id="sp1-btn" className="btn btn-primary btn-block" onClick={this.openFileBrowser}>
                            <i className="fa fa-upload"></i> Upload Image
                        </button>
                        <input id="sp1-image" style={{display: 'none' }} type='file' onChange={this.handleImageChange}/>
                        <span className="input-note">{this.state.image.name}</span>
                        <span className="input-note" style={{color:'red'}}>{this.state.imageerror}</span>
                        <span className="input-note">Required Size: 100x100 pixels</span>
                        <span className="errormsg">{this.state.ierr}</span>
                        
                        <div className="clearfix"></div>
                    </div>
                    </div>

                <button id="sp1-prev" type="button" className="btn btn-success btn-block" onClick={this.handlePreview} >
                    Preview
                </button>

                <div id="modal">
                    <CustomModal handlePreview={this.handlePreview} validateInputs={this.validateInputs}/>    
                </div>
                    
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