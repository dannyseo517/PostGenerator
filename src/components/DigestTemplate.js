import React, {Component} from 'react'
import { connect } from 'react-redux'
import CanvasCreator from './CanvasCreator'
require( '../../public/assets/css/digesttemplate.css');



class DigestTemplate extends Component{
    constructor(props){
        super(props);


    }

    
    render(){
        return(
            
            <table className="tableContainer">
                <tbody>
                    <tr>
                        <td className="centerContainer">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            
                                            <img src="./assets/images/padding.gif" alt="" width="1" height="2" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="headerText">
                                            <div>Having trouble viewing this email? <a href="#">View online</a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="5" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table className="headerTable">
                                                <tbody>
                                                    <tr>
                                                        <td className="headerImage">
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td >
                                                                            <img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="./assets/images/padding.gif" alt="" width="10" height="1" /></td>
                                                                        <td>
                                                                            <div><a title="MINING.com Home" href="#"> <img src="./assets/images/miningdotcom-digest-logo-sept2012.gif" alt="MINING.com - your source for global mining news" width="212" height="47" /> </a></div>
                                                                        </td>
                                                                        <td><img src="./assets/images/padding.gif" alt="" width="10" height="1" /></td>
                                                                        <td>
                                                                            <div className="MND">Digest</div>
                                                                            <div className="date" >Friday 24 March 2017</div>
                                                                        </td>
                                                                        <td><img src="./assets/images/padding.gif" alt="" width="10" height="1" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="toolbar">
                                                                            <table cellSpacing="0" cellPadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="toollist">
                                                                                            <div>
                                                                                                <a href="#">Home</a> 
                                                                                                <a href="#">Gold</a> 
                                                                                                <a href="#">Coal</a> 
                                                                                                <a href="#">Copper</a> 
                                                                                                <a href="#">Iron Ore</a> 
                                                                                                <a href="#">Oil Sands</a> 
                                                                                                <a href="#">Rare Earth</a> 
                                                                                                <a href="#">Silver</a> 
                                                                                                <a href="#">Uranium</a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td className="featuredBlock">
                                            <table cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td className="featureImage">
                                                            <div>
                                                                <a href="#"> 
                                                                    <img title="" src="./assets/images/d1.jpg" alt="" width="300" height="250" /> 
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className="vertSpace">
                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                        </td>
                                                        <td className="feature">
                                                            <div className="featureTitle">
                                                                <a href="#"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                                                            </div>
                                                            <div className="articlePadding">
                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                            </div>
                                                            <div className="featureText">
                                                                <p>Sed pretium aliquet arcu aliquet placerat. Nulla vulputate congue condimentum. Donec in rhoncus est, eu lacinia metus.</p>
                                                            </div>
                                                            <div className="articlePadding">
                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                            </div>
                                                            <div className="featureread">
                                                                <a href="#">read &raquo; </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="sp1-div">
                                                {this.props.spot == "1" ? <CanvasCreator id="1" file={this.props.image} headline={this.props.headline} body={this.props.body} url={this.props.url}/> : ""}
                                            </div>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="./assets/images/bhp.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Pellentesque risus ligula, porttitor in magna eleifend, consectetur scelerisque diam </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Ut leo felis, porta at risus at, pharetra feugiat eros. Suspendisse luctus diam vel felis fermentum gravida. Ut in convallis ex, ut tempor odio.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="./assets/images/d2.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Cras et ante ut lacus tristique ullamcorper quis eget nibh </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Integer in dolor id est ornare vulputate nec sed risus. Nulla vulputate metus sit amet lorem pretium porttitor.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="./assets/images/d3.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Fusce id tellus ultricies, bibendum nisl vitae, lacinia eros </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Duis elementum nisl non purus commodo ultricies. Vivamus lobortis dolor a dapibus laoreet. Donec euismod massa turpis, ac auctor eros porta vel. Etiam accumsan sapien quis massa varius facilisis.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="./assets/images/d4.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Nam urna tortor, convallis in sodales nec, sollicitudin eget sapien</a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Nulla pulvinar faucibus justo sed pellentesque. Integer et lorem odio. </p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="./assets/images/d5.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Phasellus tincidunt mauris odio, sit amet pretium quam volutpat vitae </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Phasellus non nisl sit amet massa euismod mattis sit amet in lectus. Aliquam sagittis ante accumsan blandit sollicitudin.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="#"> 
                                                                <div id="sp2-div">
                                                                    {this.props.spot == "2" ? <CanvasCreator id="2" file={this.props.image} headline={this.props.headline} body={this.props.body} url={this.props.url}/> : ""}
                                                                </div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="./assets/images/d6.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Phasellus lobortis dolor tellus, sit amet bibendum felis semper quis</a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Morbi nec nunc vel nunc blandit posuere. Donec pretium felis elit, ut efficitur lorem finibus ut. Phasellus bibendum metus magna,</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="./assets/images/bhp.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="./assets/images/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Morbi id tortor ante. Ut congue aliquet orci at finibus.</a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Morbi egestas quam lorem, a lacinia ante gravida a. Aliquam magna dui, aliquet sed sapien sed, vestibulum scelerisque sapien.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#"> 
                                                <div id="sp3-div">
                                                    {this.props.spot == "3" ? <CanvasCreator id="3" file={this.props.image} headline={this.props.headline} body={this.props.body} url={this.props.url}/> : ""}
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Donec facilisis hendrerit tristique.</a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Sed facilisis quam vitae leo auctor, ut interdum dui consectetur. Ut pharetra pulvinar sodales. Aliquam erat volutpat.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">Integer lacinia, libero quis venenatis ultricies, lacus nisi interdum libero </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>Nunc dictum arcu ut ex convallis faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis non elit orci. Etiam et venenatis nibh.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="./assets/images/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="read">
                                                                                <a href="#">read &raquo; </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr className="articleBlockPadding">
                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div><a title="1 Day Spot Gold Price" href="#"> <img src="./assets/images/GraphEngine.png" alt="1 Day Spot Gold Price" /></a></div>
                                                        </td>
                                                        <td><img src="./assets/images/padding.gif" alt="" width="38" height="1" /></td>
                                                        <td>
                                                            <div><a title="1 Month Copper Price" href="#"> <img src="./assets/images/GraphEngine.png" alt="1 Month Copper Price" /></a></div>
                                                        </td>
                                                        <td><img src="./assets/images/padding.gif" alt="" width="37" height="1" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div id="readmore">
                                                <div><img src="./assets/images/padding.gif" alt="" width="1" height="5" /></div>
                                                <a href="#">Read more news on MINING.com &raquo;</a>
                                                <div><img src="./assets/images/padding.gif" alt="" width="1" height="5" /></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div><a title="Find MINING.com on Facebook" href="#"> <img src="./assets/images/facebook.jpg" alt="Find MINING.com on Facebook" width="200" height="53" /> </a></div>
                                                        </td>
                                                        <td><img src="./assets/images/padding.gif" alt="" width="8" height="1" /></td>
                                                        <td>
                                                            <div><a title="Follow MINING.com on Twitter" href="#"> <img src="./assets/images/twitter.jpg" alt="Follow MINING.com on Twitter" width="200" height="53" /> </a></div>
                                                        </td>
                                                        <td><img src="./assets/images/padding.gif" alt="" width="7" height="1" /></td>
                                                        <td>
                                                            <div><a title="Subscribe to the RSS Feed" href="#"> <img src="./assets/images/rss.jpg" alt="Subscribe to the RSS Feed" width="200" height="53" /> </a></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="toolbar">
                                                                            <table cellSpacing="0" cellPadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="toollist">
                                                                                            <div>
                                                                                                <a href="#">Home</a> 
                                                                                                <a href="#">Gold</a> 
                                                                                                <a href="#">Coal</a> 
                                                                                                <a href="#">Copper</a> 
                                                                                                <a href="#">Iron Ore</a> 
                                                                                                <a href="#">Oil Sands</a> 
                                                                                                <a href="#">Rare Earth</a> 
                                                                                                <a href="#">Silver</a> 
                                                                                                <a href="#">Uranium</a>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="2" /></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td className="botTextTD">
                                            <div><a href="#">About Us </a> | <a href="#">Privacy Policy</a> | <a href="#">Unsubscribe </a> | <a href="#">Contact Us </a> | <a href="#">Advertise </a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td className="disclaimerTD">
                                            <div>This email was sent to you by InfoMine Inc. Suite 900, 580 Hornby Street, Vancouver, BC, Canada V6C 3B6 | +1 604 683 2037 | <a href="#">cem@infomine.com</a>. Please visit <a href="#">cem.infomine.com</a> for more information. Copyright InfoMine.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="5" /></td>
                                    </tr>
                                    <tr>
                                        <td className="disclaimerTD">
                                            <div>You are receiving this email because the email address [[$E:Email$]] was subscribed to the MINING.com email list "[[$M:ListName$]]". You may <a href="#">unsubscribe</a> at any time.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="5" /></td>
                                    </tr>
                                    <tr>
                                        <td className="disclaimerTD">
                                            <div>The information contained in &ldquo;Mining News Digest&rdquo; is collected from a variety of sources on a &ldquo;best intentions&rdquo; basis. InfoMine Inc. makes no representation or offers no warranty with respect to the adequacy of the information for any particular purpose. Any information presented in &ldquo;Mining News Digest&rdquo; is not a solicitation to purchase or acquire any securities. Use of this service is an acceptance of this disclaimer. Visit our web site to read our <a href="#">complete disclaimer</a>.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="./assets/images/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => {
    return{
        headline: state.mainpanel.headline,
        body: state.mainpanel.body,
        image: state.mainpanel.image,
        url: state.mainpanel.url,
        spot: state.adspot.spot,
        id: state.mainpanel.id
    }
    
}

DigestTemplate = connect(mapStateToProps)(DigestTemplate)

export default DigestTemplate;