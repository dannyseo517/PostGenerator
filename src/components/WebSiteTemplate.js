import React, {Component} from 'react'
import {connect} from 'react-redux'
require( '../../public/assets/css/websitetemplate.css');


class WebSiteTemplate extends Component{
    constructor(props){
        super(props)
    }

    setBackgroundImage(id, img){
        var reader = new FileReader();
        reader.onloadend = function(){
            document.getElementById(id).style.backgroundImage = "url(" + reader.result + ")";
        }
        if(img){
            reader.readAsDataURL(img);
        }    
    }
    
    renderSponsorPost(spid, headline, body, image){
        if(headline && body && image){
            return(
                <div id={"div-" + spid} className="kesselPost sponsor-post hidden-print">
                    <div id="div-gpt-ad-1484094031880-0" data-google-query-id="CN7-9LOx_9ICFc9rfgodgj0CWw">
                        <div id="google_ads_iframe_/1043744/MINING.com_Sponsor-Website-Post_01_0__container__" style={{border: '0pt none', display: 'inline-block; width: 100%', height: 'auto',}}>
                            <div className="featured-image">
                                <a id={spid} href="#" className="image-link" rel="nofollow"></a>
                            </div>
                            {this.setBackgroundImage(spid, image)}
                        </div>
                    </div>
                    <div className="post-content">
                        <h3 className="post-headline"><a href="#" rel="nofollow">{headline}</a></h3>
                        <p>{body}</p>
                        <div className="sponsor-label">Sponsor</div>
                    </div>
                </div>
            )
        }
    }
    render(){
        return(
            <div >
                <div className="kesselHeader">
                    <div className="kesselNav yamm navbar navbar-default" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="fa fa-lg fa-bars"></span>
                                </button>
                                <a className="navbar-brand" href="/"><img src="./assets/images/MDC-site-logo.png" alt="MINING.com"/></a>
                            </div>

                            <div className="navbar-collapse collapse in" id="bs-example-navbar-collapse-1" aria-expanded="true">
                                <ul id="menu-kessel-primary" className="nav navbar-nav kessel-main-menu">
                                    <li id="menu-item-843124" className="breakpoint-md menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-5564 current_page_item menu-item-843124 active"><a title="Home" href="http://www.mining.com/">Home</a></li>
                                    <li id="menu-item-843126" className="breakpoint-md menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-843126"><a title="Gold" href="http://www.mining.com/gold/">Gold</a></li>
                                    <li id="menu-item-843130" className="breakpoint-md menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-843130"><a title="Coal" href="http://www.mining.com/coal/">Coal</a></li>
                                    <li id="menu-item-843128" className="breakpoint-md menu-item menu-item-type-taxonomy menu-item-object-post_tag menu-item-843128"><a title="Copper" href="http://www.mining.com/copper/">Copper</a></li>
                                    <li id="menu-item-843122" className="button-overflow menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-843122 dropdown"><a title="Menu" href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true">More <span className="caret"></span></a></li>
                                </ul>
                                <ul className="nav navbar-nav">
                                    <li><a href="/market-data/">Market Data</a></li>
                                    <li className="dropdown yamm-fw search-drop-button">
                                        <a href="#" style={{paddingBottom:'18px', paddingTop:'20px'}} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-search"></i></a>
                                    </li>
                                    <li><a style={{paddingBottom:'19px', paddingTop:'20px'}} href="http://www.infomine.com/start" target="_blank"><img src="http://www.mining.com/wp-content/themes/Kessel/images/infomine-nav-logo.png" alt="InfoMine" width="58" height="10" style={{marginBottom: '1px'}}/></a></li>
                                </ul>
                                <ul className="infomine-nav nav navbar-nav navbar-right">
                                    <li id="AuthSignIn"><a href="#">Sign In</a></li>
                                    <li id="AuthRegister"><a href="#">Join</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" >
                    <div className="billboard970x90">
                        <div>Billboard 970x90 </div>
                    </div>
                    <div className="KesselBody">
                        <div className="row">
                            <div className="mainBody homepageBody">
                                <div className="kesselPost standard-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12 col-md-4">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/d1.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12 col-md-8">
                                            <h3 className="post-headline"><a href="#">Thermal coal price rally to hold</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >about 24 hours ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >1,000 | </span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880892">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="kesselPost image-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/f3.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12">
                                            <h3 className="post-headline"><a href="#">Fresh ‘incident’ at Barrick’s Veladero mine in Argentina</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >a day ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >2,398</span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880780">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                {this.props.spot == "1" ? this.renderSponsorPost("wsp1", this.props.headline, this.props.body, this.props.image) : ""}
                                <div className="kesselPost standard-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12 col-md-4">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/d2.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12 col-md-8">
                                            <h3 className="post-headline"><a href="#">Thermal coal price rally to hold</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >about 24 hours ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >1,000 | </span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880892">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                <div className="kesselPost standard-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12 col-md-4">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/d3.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12 col-md-8">
                                            <h3 className="post-headline"><a href="#">Thermal coal price rally to hold</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >about 24 hours ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >1,000 | </span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880892">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                <div className="kesselPost image-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/f1.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12">
                                            <h3 className="post-headline"><a href="#">Fresh ‘incident’ at Barrick’s Veladero mine in Argentina</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >a day ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >2,398</span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880780">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                {this.props.spot == "2" ? this.renderSponsorPost("wsp2", this.props.headline, this.props.body, this.props.image) : ""}
                                <div className="kesselPost standard-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12 col-md-4">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/d4.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12 col-md-8">
                                            <h3 className="post-headline"><a href="#">Thermal coal price rally to hold</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >about 24 hours ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >1,000 | </span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880892">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                <div className="kesselPost standard-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12 col-md-4">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/d5.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12 col-md-8">
                                            <h3 className="post-headline"><a href="#">Thermal coal price rally to hold</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >about 24 hours ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >1,000 | </span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880892">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                <div className="kesselPost image-post">
                                    <div className="row">
                                        <div className="featured-image col-xs-12">
                                            <a href="#" className="image-link" style={{backgroundImage: 'url("./assets/images/f2.jpg")'}}></a>
                                        </div>
                                        <div className="post-content col-xs-12">
                                            <h3 className="post-headline"><a href="#">Fresh ‘incident’ at Barrick’s Veladero mine in Argentina</a></h3>
                                            <div className="post-byline"><a href="#" rel="author">John Smith</a> | <time className="timeago" >a day ago</time> |   <nobr>
                                                <span className="post-viewCount"><i className="fa fa-fire"></i> <span className="kessel_post_views" >2,398</span></span>
                                                <span className="post-commentCount"><i className="fa fa-comment"></i> <span className="disqus-comment-count" data-disqus-identifier="880780">0</span></span>
                                                </nobr>
                                            </div>              
                                        </div>
                                    </div>
                                </div>
                                {this.props.spot == "3" ? this.renderSponsorPost("wsp3", this.props.headline, this.props.body, this.props.image) : ""}
                                
                            </div>
                            
                            <div className="kesselSidebar hidden-xs hidden-print">
                                <div className="sidekick300x250"><div>SideKick 350x250 </div></div>
                                <div className="kesselTicker">
                                    <dl className="dl-horizontal"><dt>Gold</dt><dd>$1,244.10<span className="downTick">-0.77%</span></dd><hr/><dt>Silver</dt><dd>$18.13<span className="downTick">-0.49%</span></dd><hr/></dl>
                                    <span><a href="/market-data/">More in markets</a></span>
                                </div>
                                <div className="site-social-follow">
                                    <div className="social-button-wrap">
                                        <div className="facebook">
                                            <a className="btn btn-block btn-facebook" href="#" target="_blank" title="Like Us on Facebook">
                                            <i className="fa fa-lg fa-facebook"></i> <span className="visible-lg-inline">Like Us on Facebook</span>
                                            </a>
                                        </div>

                                        <div className="twitter">
                                            <a className="btn btn-block btn-twitter" href="#" target="_blank" title="Follow @mining">
                                            <i className="fa fa-lg fa-twitter"></i> <span className="visible-lg-inline">Follow @mining</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidekick300x600"><div>SideKick 300x600 </div></div>
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
        body: state.mainpanel.body,
        image: state.mainpanel.image,
        spot: state.adspot.spot,
        id: state.mainpanel.id
    }
}

WebSiteTemplate = connect(mapStateToProps)(WebSiteTemplate)


export default WebSiteTemplate;