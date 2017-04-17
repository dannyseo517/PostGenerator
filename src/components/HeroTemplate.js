import React, {Component} from 'react'
import {connect} from 'react-redux'
import CanvasCreator from './CanvasCreator'

class HeroTemplate extends Component{
    constructor(props){
        super(props);
        
    }

    setBackgroundImage(img){
        var reader = new FileReader();
        reader.onloadend = function(){
            document.getElementById('bg').style.backgroundImage = "url(" + reader.result + ")";
        }
        if(img){
            reader.readAsDataURL(img);
        }    
    }

    render(){
        return(
            <div>
                
                <div className="kesselFeaturedPosts">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <div className="kesselFeatured kesselFeatured-big">
                                <a href="#">
                                <div className="kesselFeatured-cover"></div>
                            <div className="kesselFeatured-background" style={{backgroundImage: 'url("./assets/images/h1.jpg")'}}></div>
                                <h3>Fresh ‘incident’ at Barrick’s Veladero mine in Argentina</h3>
                                </a>
                            </div>
                        </div>
                            
                        <div className="col-xs-12 col-sm-4">
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="#">
                                <div className="kesselFeatured-cover"></div>
                                <div className="kesselFeatured-background" style={{backgroundImage: 'url("./assets/images/h2.jpg")'}}></div>
                                <h3>Miners to spend $21 billion in exploration by 2025</h3>
                                </a>
                            </div>
                                                                    
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="#">
                                <div className="kesselFeatured-cover"></div>
                                <div className="kesselFeatured-background" style={{backgroundImage: 'url("./assets/images/h3.jpg")'}}></div>
                                <h3>Eldorado to begin production at its Greek Olympias mine by year-end</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">        
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="#">
                                <div className="kesselFeatured-cover"></div>
                                <div className="kesselFeatured-background" style={{backgroundImage: 'url("./assets/images/h4.jpg")'}}></div>
                                <h3>Trump signs executive order undoing Obama's clean power plan</h3>
                                </a>
                            </div>
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="http://www.mining.com/trump-signs-executive-order-undoing-obamas-clean-power-plan/">
                                <div className="kesselFeatured-cover"></div>
                                <div id="bg" className="kesselFeatured-background"></div>
                                {this.setBackgroundImage(this.props.image)}
                                <h3>{this.props.headline ? this.props.headline:"Your Title Here"}</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        headline: state.mainpanel.headline,
        image: state.mainpanel.image,
        template: state.template.template
    }
    
}

HeroTemplate = connect(mapStateToProps)(HeroTemplate)

export default HeroTemplate