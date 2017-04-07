import Modal from 'react-modal'
import React, {Component} from 'react'
import { connect } from 'react-redux'

require( '../../public/assets/css/form.css');

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
    height                : '70%',
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
class CustomModal extends Component {


    constructor (props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            open: false,
            senderName: '',
            senderEmail: '',
            emailMessage: '',
            spot: ''
        }
        this.handleInputs = this.handleInputs.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.formValidator = this.formValidator.bind(this);
    }

    openModal () { 
      this.setState({open: true});
      this.props.handlePreview(this);
     
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

    sponsorCheckBoxes(){
        if(this.props.template.template != "HeroPlacement"){
            return(
                <div className="radios">
                    <h5>Sponsor Post Spot</h5>
                    <label className="radio-inline"><input type="radio" value="1" name="optradio" onChange={this.handleRadio}/># 1</label>
                    <label className="radio-inline"><input type="radio" value="2" name="optradio" onChange={this.handleRadio}/># 2</label>
                    <label className="radio-inline"><input type="radio" value="3" name="optradio" onChange={this.handleRadio}/># 3</label>
                </div>
            );
        }
    }

    handleRadio(event){
        this.setState({spot: event.target.value})
    }
    handleInputs(event){
        if(event.target.id == "send-name"){
            this.setState({senderName: event.target.value})
        }
        if(event.target.id == "send-email"){
            this.setState({senderEmail: event.target.value})
        }
        if(event.target.id == "send-body"){
            this.setState({emailMessage: event.target.value})
        }
    }

    formValidator(){
        
        if(this.state.senderName.trim() == "" || this.state.senderEmail.trim() =="" || this.state.link.trim() == ""
            || this.state.spot.trim() == ""){
                
        }

        return false;
    }

    sendEmail(event){
        event.preventDefault();
        if(this.formValidator()){
        var param = ''
        param += 'from=' + this.state.senderName + '&email=' + this.state.senderEmail
        param += '&type=' + this.props.template.template
        if(this.props.template.template == "HeroPlacement"){
            param += '&headline=' + this.props.mainpanel.headline4;
            getBase64(this.props.mainpanel.image4, function(ret){
                param += '&image=' + ret;
                fetch('http://localhost:4000/send?' + param, {mode: 'cors'})
                    .then(result=> {
                        console.log(result);
                    });

            });
        }
        }

        //return $.getJSON('http://localhost:4000/send?' + param);

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
                  <form className="sendForm">
                      <h1>{this.sponsorTypes()}</h1>
                        <h5>Name</h5>
                        <input id="send-name" type="text" className="form-control" placeholder="Text input" 
                               value={this.state.senderName} onChange={this.handleInputs} />
                        <h5>Contact Email</h5>
                        <input id="send-email" type="text" className="form-control" placeholder="Text input" value={this.state.senderEmail} onChange={this.handleInputs}/>
                        {this.sponsorCheckBoxes()}
                        <h5>Additional Message</h5>
                        <textarea id="send-body" className="form-control" rows="3" value={this.state.emailMessage} onChange={this.handleInputs}></textarea>
                        <div id="recap" className="center">
                            <Recaptcha
                                sitekey="6LfK0gATAAAAAHz3VyQnyvhiwja2u4qYrn_irM65"
                                render="explicit"
                                onloadCallback={console.log.bind(this, "recaptcha loaded")}
                            />
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
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return{
        mainpanel: state.mainpanel,
        template: state.template
    }
}

CustomModal = connect(mapStateToProps)(CustomModal)

export default CustomModal