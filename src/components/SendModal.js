import Modal from 'react-modal'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import CanvasCreator from './CanvasCreator'
import 'whatwg-fetch'
require( '../../public/assets/css/form.css');
var config = require("../../config");

var customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.6)',
    zIndex                : '999',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '80%',
    height                :  'auto',
    backgroundColor       : '#eaeaea'
   
  }
};

function getBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        callback(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
class SendModal extends Component {
    constructor (props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            open: false,
            senderName: '',
            senderEmail: '',
            emailMessage: '',
            spot: '',
            link: '',
            emailerr: '', nameerr: '', spoterr: '', recaperr: '',
            reCaptchaResponse: '',
            sentSuccess: false
        }
        this.handleInputs = this.handleInputs.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.formValidator = this.formValidator.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.expiredCallback = this.expiredCallback.bind(this);
        this.showPreview = this.showPreview.bind(this);

    }

    openModal () { 
        if(this.props.validateInputs()){
            this.setState({open: true, sentSuccess: false});
            this.props.handlePreview(this);
            // if(this.props.template.template=="DigestSponsorPost"){
            //     document.getElementById("preview-send").appendChild(this.showPreview());
            // }
        }
    }
    closeModal () {
        this.setState({open: false});
    }

    sponsorTypes(){
        let sponsorType = "";
        if(this.props.template.template == "WebsiteSponsorPost"){
            sponsorType = "Website Sponsor Post"
        }
        if(this.props.template.template == "HeroPlacement"){
            sponsorType = "Hero Placement"
        }
        if(this.props.template.template == "DigestSponsorPost"){
            sponsorType = "Digest Sponsor Post"
        }
        return(
            sponsorType
        )
    }

    
    handleInputs(event){
        if(event.target.id == "send-name"){
            this.setState({senderName: event.target.value})
            this.setState({nameerr: ""});
        }
        if(event.target.id == "send-email"){
            this.setState({senderEmail: event.target.value})
            this.setState({emailerr: ""});
        }
        if(event.target.id == "send-body"){
            this.setState({emailMessage: event.target.value})
        }
    }

    formValidator(){
        
        if(this.state.senderName.trim() == "" || this.state.senderEmail.trim() ==""
            || this.state.reCaptchaResponse.trim() == ""){
                if(this.state.senderEmail.trim() == ""){
                    this.setState({emailerr: "Please enter your contact email"});
                }
                if(this.state.senderName.trim() == ""){
                    this.setState({nameerr: "Please enter your name"});
                }if(this.state.reCaptchaResponse.trim() == ""){
                    this.setState({recaperr: "Please verify recaptcha"});
                }
                return false;
        }
        return true;
    }

    sendEmail(event){
        event.preventDefault();
        if(this.formValidator()){
            var _from = this.state.senderName;
            var _email = this.state.senderEmail;
            var _type = this.props.template.template;
            var _spot = this.props.spot;
            var _recap = this.props.reCaptchaResponse;
            var _headline = this.props.mainpanel.headline;
            var _link = this.props.mainpanel.url;
            var _image = "";
            var _postbody = "";
            var _msg = this.state.emailMessage;
            var _subject = "[Sponsor Post Generator] New Request";
            var _to = "Advertisement";
            if(_type != "HeroPlacement"){
                _postbody = this.props.mainpanel.body;
            }

            var _body = '<b>Name: </b>' + _from + '<br/><b>Email: </b>' + _email +
                  '<br/><b>Type: </b>' + _type + '<br/><b>Spot: </b>' + _spot + '<br/><b>Headline: </b>' + _headline +
                  '<br/><b>Body: </b>' + _postbody + '<br/><b>Link: </b>' + _link + 
                  '<br/><b>Additional Message: </b>' + _msg;

            if(this.props.template.template == "DigestSponsorPost"){
                var canvas = document.getElementById("canvas-"+this.props.spot);
                fetch(config.emailserver, {
                    method:'POST',
                    mode: 'no-cors',
                    headers: {
                        'Access-Control-Allow-Origin':'*',
                        'Content-Type': 'multipart/form-data'
                    },
                    body:JSON.stringify({
                        to: _to,
                        subject: _subject,
                        body: _body,
                        image: canvas.toDataURL('image/jpeg')
                    })
                }).then(result=> {
                    if(result.status == 200){
                        this.setState({sentSuccess: true})
                    }
                }).catch(function(error){
                    console.log("Request failed", error);
                });
            }
            else{
                getBase64(this.props.mainpanel.image, function(ret){
                    param += '&image=' + ret;
                    fetch(config.emailserver+'?' + param, {mode: 'cors'})
                        .then(result=> {
                            if(result.status == 200){
                                this.setState({sentSuccess: true})
                            }
                        });

                    });
            }
        }
    }
    showPreview(){
        return(
            <div>
                <CanvasCreator id="prev" file={this.props.mainpanel.image} headline={this.props.mainpanel.headline} body={this.props.mainpanel.body} url={this.props.mainpanel.url}/>
            </div>
        )
    }
    
    verifyCallback(response) {
        this.setState({reCaptchaResponse: response});
        this.setState({recaperr: ""});
    };

    expiredCallback(response){
        this.setState({reCaptchaResponse: ""});
    }
    
    render () {
        var Recaptcha = require('react-recaptcha');
        return (
            <div>
                <button id="modalbtn" type="button" className="btn btn-success btn-block" onClick={this.openModal}>Send</button>
                <Modal 
                  id="custom-modal" 
                  isOpen={this.state.open} 
                  onRequestClose={this.closeModal}
                  contentLabel="Example Modal"
                  style={customStyles}
                >
                {this.state.sentSuccess ? 
                <div>
                    <h2 style={{textAlign:"center"}}>Thank you. Your response has been sent.</h2>
                </div>
                :
                  <form className="sendForm">
                      <h1>{this.sponsorTypes()}</h1>
                        <div id="preview-send"></div> 
                                        <CanvasCreator id="prev" file={this.props.mainpanel.image} headline={this.props.mainpanel.headline} body={this.props.mainpanel.body} url={this.props.mainpanel.url}/>

                        <h5>Name</h5>
                        <input id="send-name" type="text" className="form-control" placeholder="Text input" 
                               value={this.state.senderName} onChange={this.handleInputs} />
                        <span className="errorMsg" id="send-name-error">{this.state.nameerr}</span>
                        <h5>Contact Email</h5>
                        <input id="send-email" type="text" className="form-control" placeholder="Text input" value={this.state.senderEmail} 
                               onChange={this.handleInputs}/>
                        <span className="errorMsg" id="send-email-error">{this.state.emailerr}</span>
                        <h5>Additional Message</h5>
                        <textarea id="send-body" className="form-control" rows="3" value={this.state.emailMessage} onChange={this.handleInputs}></textarea>
                        <div id="recap" className="center">
                            <Recaptcha
                                sitekey="6LfK0gATAAAAAHz3VyQnyvhiwja2u4qYrn_irM65"
                                render="explicit"
                                onloadCallback={console.log.bind(this, "recaptcha loaded")}
                                expiredCallback={this.expiredCallback}
                                verifyCallback={this.verifyCallback}
                            />
                            <span className="errorMsg" id="recap-error">{this.state.recaperr}</span>
                        </div>
                        <div className="col-sm-12 text-center">
                            <button id="sp1-submit" type="button" className="btn btn-success btn-md center-block" onClick={this.sendEmail} >
                                Send
                            </button>
                            <button id="sp1-submit" type="button" className="btn btn-danger btn-md center-block" onClick={this.closeModal} >
                                Close
                            </button>
                        </div>
                    </form>
                }
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return{
        mainpanel: state.mainpanel,
        template: state.template,
        spot: state.adspot.spot
    }
}

SendModal = connect(mapStateToProps)(SendModal)

export default SendModal