import React, {Component} from 'react'

class SponsorPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            headline: '',
            body: '', 
            image: '',
        }
        this.handleHeadLineChange = this.handleHeadLineChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleHeadLineChange(event){
        this.setState({headline: event.target.value})
    }
    handleBodyChange(event){
        this.setState({body: event.target.value})
    }
    handleSubmit(event){
        alert("hello world: " + this.state.body + this.state.headline);
        store.dispatch(action);
    }
    render(){
        return(
            <div className="kesselWebSP">
                <h5>Headline</h5>
                <input type="text" className="form-control" placeholder="Text input" value={this.state.headline} onChange={this.handleHeadLineChange}/>
                <span className="input-note">Characters Left: 60</span>
            
                <h5>Body</h5>
                <textarea className="form-control" rows="3" value={this.state.body} onChange={this.handleBodyChange}></textarea>
                <span className="input-note">Characters Left: 175</span>
	            <div className="clearfix"></div>
                <h5>Image</h5>
                <a href="#" className="btn btn-primary btn-block">
                <i className="fa fa-upload"></i> Upload Image
                </a>
                <span className="input-note">Required Size: 200x200 pixels</span>
                <button onClick={this.handleSubmit} className="btn btn-success pull-right" >
                    Preview
                </button>
            </div>
        );
    }
}

export default SponsorPost