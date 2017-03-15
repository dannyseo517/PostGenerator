import React, {Component} from 'react';

class PostSelector extends Component{
    render(){
        return(
            <div className="post-option">
                <select className="form-control">
                    <option>Website Sponsor Post</option>
                    <option>Digest Sponsor Post</option>
                    <option>Hero Placement</option>
                </select>
            </div>
        );
    }
}

export default PostSelector;