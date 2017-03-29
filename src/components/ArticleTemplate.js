import React, {Component} from 'react'
import {connect} from 'react-redux'

class ArticleTemplate extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="kesselSponsorHeader hidden-xs hidden-print">
                    <div className="container">
                        <div className="row">
                            <div className="kesselSponsorHeader-post col-xs-3">
                            </div>
                            <div className="kesselSponsorHeader-post col-xs-3">
                            </div>
                            <div className="kesselSponsorHeader-post col-xs-3">
                            </div>

                            <div className="kesselSponsorHeader-post col-xs-3">
                                <div className="kesselHeaderSignUp">
                                <div method="post">
                                    <div className="form-group">
                                    <label>Sign Up for the Uranium Digest</label>
                                    <input className="form-control" id="header-email" placeholder="Your Email Here" name="e"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block" name="signup">Sign Up</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="kesselBody">
                        <div className="row">
                            <div className="col-xs-12 mainBody">
                                <div className="singleBody">
                                    <div className="post-content">
                                        <div className="post-details">
                                            <h2 className="post-headline">Rio Tinto may take over Pistol Bay’s uranium assets sooner than expected</h2>
                                            <div className="post-byline">
                                                <a href="#" title="Posts by " rel="author">John Smith</a> | 
                                                <time className="timeago" title="Mar. 28, 2017, 6:50 AM"> a day ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views">1,612 </span></span> | 
                                                <span className="post-commentCount"> <i className="fa fa-comment"></i> <span className="disqus-comment-count"> 0</span></span>
                                                </nobr>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticleTemplate