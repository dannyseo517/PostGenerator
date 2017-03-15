import React, {Component} from 'react';

class App extends Component{
    render(){
        return(
            <div className="kesselSPgen-settings">
		  
                <h2>Sponsor Post Generator</h2>
                
                <select className="form-control">
                <option>Website Sponsor Post</option>
                <option>Digest Sponsor Post</option>
                <option>Hero Placement</option>
                </select>
			
                <div className="kesselWebSP">
                <h5>Headline</h5>
                <input type="text" class="form-control" placeholder="Text input"/>
                <span className="input-note">Characters Left: 60</span>
                
                <h5>Body</h5>
                <textarea className="form-control" rows="3"></textarea>
                <span className="input-note">Characters Left: 175</span>
                
                <h5>Image</h5>
                <a href="#" className="btn btn-primary btn-block">
                    <i className="fa fa-upload"></i> Upload Image
                </a>
                <span className="input-note">Required Size: 200x200 pixels</span>
                
                <a href="#" className="btn btn-success pull-right" disabled="disabled">
                    Preview
                </a>
                <div className="clearfix"></div>
                </div>
			
                <div className="kesselDigestSP">
                <h5>Headline</h5>
                <input type="text" className="form-control" placeholder="Text input" />
                <span className="input-note">Characters Left: 60</span>
                
                <h5>Body</h5>
                <textarea className="form-control" rows="3"></textarea>
                <span className="input-note">Characters Left: 175</span>
                
                <h5>Image</h5>
                <a href="#" className="btn btn-primary btn-block">
                    <i className="fa fa-upload"></i> Upload Image
                </a>
                <span className="input-note">Required Size: 200x200 pixels</span>
                
                <a href="#" className="btn btn-success pull-right">
                    Preview
                </a>
                <div className="clearfix"></div>
                </div>
			
                <div className="kesselHeroPlacement">
                <h5>Headline</h5>
                <input type="text" className="form-control" placeholder="Text input" />
                <span className="input-note">Characters Left: 75</span>
                            
                <h5>Image</h5>
                <a href="#" className="btn btn-primary btn-block">
                    <i className="fa fa-upload"></i> Upload Image
                </a>
                <span className="input-note">Minimum Size: 800x540 pixels</span>
                
                <a href="#" className="btn btn-success pull-right">
                    Preview
                </a>
                <div className="clearfix"></div>
                </div>
			
                <div className="kesselSalesInfo">
                <h5>Select Salesperson</h5>
                <select className="form-control">
                    <option>Greg Fenrick</option>
                    <option>Alec Baldwin</option>
                    <option>Some other salesperson</option>
                </select>
                
                <h5>Order Number</h5>
                <input type="text" className="form-control" placeholder="Text input"/>
                    
                <a href="#" className="btn btn-success pull-right">
                    Submit
                </a>
                <div className="clearfix"></div>
                </div>
		    </div>
        )
    }
}