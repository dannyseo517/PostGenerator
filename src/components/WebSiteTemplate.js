import React, {Component} from 'react'
import {connect} from 'react-redux'

class WebSiteTemplate extends Component{
    constructor(props){
        super(props);
        
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
                            <div className="kesselFeatured-background" style={{backgroundImage: 'url("http://www.mining.com/wp-content/uploads/2017/03/fresh-incident-at-barricks-veladero-mine-in-argentina.jpg")'}}></div>
                                <h3>Fresh ‘incident’ at Barrick’s Veladero mine in Argentina</h3>
                                </a>
                            </div>
                        </div>
                            
                        <div className="col-xs-12 col-sm-4">
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="#">
                                <div className="kesselFeatured-cover"></div>
                                <div className="kesselFeatured-background" style={{backgroundImage: 'url("http://www.mining.com/wp-content/uploads/2017/03/miners-to-spend-21-billion-in-exploration-by-2025.jpg")'}}></div>
                                <h3>Miners to spend $21 billion in exploration by 2025</h3>
                                </a>
                            </div>
                                                                    
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="#">
                                <div className="kesselFeatured-cover"></div>
                                <div className="kesselFeatured-background" style={{backgroundImage: 'url("http://www.mining.com/wp-content/uploads/2017/03/eldorado-to-begin-production-at-its-greek-olympias-mine-by-year-end.jpg")'}}></div>
                                <h3>Eldorado to begin production at its Greek Olympias mine by year-end</h3>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">        
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="#">
                                <div className="kesselFeatured-cover"></div>
                                <div className="kesselFeatured-background" style={{backgroundImage: 'url("http://www.mining.com/wp-content/uploads/2017/03/trump-signs-executive-order-undoing-obamas-clean-power-plan.jpg")'}}></div>
                                <h3>Trump signs executive order undoing Obama's clean power plan</h3>
                                </a>
                            </div>
                            <div className="kesselFeatured kesselFeatured-small">
                                <a href="http://www.mining.com/trump-signs-executive-order-undoing-obamas-clean-power-plan/">
                                <div className="kesselFeatured-cover"></div>
                                <div className="kesselFeatured-background"></div>
                                <h3>{this.props.headline && this.props.id == "sp1" ? this.props.headline:"Your Title Here"}</h3>
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
        id: state.mainpanel.id,
        headline: state.mainpanel.headline
    }
    
}

WebSiteTemplate = connect(mapStateToProps)(WebSiteTemplate)

export default WebSiteTemplate