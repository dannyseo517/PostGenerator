import React, {Component} from 'react'
import { connect } from 'react-redux'
require( '../../public/assets/css/digesttemplate.css');

function wrapText(context,text,x,y,maxWidth,lineHeight) {
    var words = text.split(' ');
    var line = '';
    var secondline = false;
    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
        secondline = true;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
    return secondline;
}

class DigestTemplate extends Component{
    constructor(props){
        super(props);

    }
    createImage(){
        var gutter = 14;
        var imgwidth = 150;
        var imgheight = 150;
        var topy = 20;
        var headerlineheight=25;
        var canvaswidth = 615;
        var canvasheight = 150;
        var textxstart = imgwidth+gutter;
        var textxstop = canvaswidth-imgwidth-gutter;
        var mainlineheight = 21;
        var mainy = 77;
        var footery = 140;
        var sponsorlineheight = 21;
        var multiline = false;

        
        if(this.props.image != null){
            var file = this.props.image;
            var h1 = this.props.headline;
            var b1 = this.props.body;
            
            var div = document.getElementById(this.props.id + '-div');
            var canvas = document.createElement("canvas");
            canvas.id = "sp1-canvas";

            var fr = new FileReader();

            fr.onload = function(){
                var ctx = canvas.getContext('2d');
                ctx.canvas.width = canvaswidth;
                ctx.canvas.height = canvasheight;
                ctx.clearRect(0, 0, canvaswidth, canvasheight);
                var img = new Image();
                img.onload = function(){
                    ctx.drawImage(img, 0,0,150,150);
                    // add header and body text
                    ctx.font = "bold 20px Arial";
                    ctx.fillStyle = '#044869';
                    var titleText = h1;
                    multiline = wrapText(ctx,titleText,textxstart,topy,textxstop,headerlineheight);
                    if (!multiline) {
                        mainy = mainy - headerlineheight;
                    }
                    ctx.font = "14px Arial";
                    ctx.fillStyle = '#333333';
                    var bodyText = b1;
                    multiline = wrapText(ctx,bodyText,textxstart,mainy,textxstop,mainlineheight);
                    //sponsor footer
                    ctx.fillStyle = '#cccccc';
                    ctx.fillText("SPONSOR",textxstart,footery,textxstop);
                    div.innerHTML = "";
                    div.appendChild(canvas);

                }
                
                img.src = fr.result;
            }
            fr.readAsDataURL(file);
        }
        
    }
    
    
    render(){
        return(
            <table className="tableContainer">
                {this.createImage()}
                <tbody>
                    <tr>
                        <td className="centerContainer">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            
                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="2" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="headerText">
                                            <div>Having trouble viewing this email? <a href="#">View online</a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" /></td>
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
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="2" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="10" height="1" /></td>
                                                                        <td>
                                                                            <div><a title="MINING.com Home" href="#"> <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/miningdotcom-digest-logo-sept2012.gif" alt="MINING.com - your source for global mining news" width="212" height="47" /> </a></div>
                                                                        </td>
                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="10" height="1" /></td>
                                                                        <td>
                                                                            <div className="MND">Mining News Digest</div>
                                                                            <div className="date" >Friday 24 March 2017</div>
                                                                        </td>
                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="10" height="1" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="2" /></td>
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
                                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="2" /></td>
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
                                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="2" /></td>
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
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td className="featuredBlock">
                                            <table cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td className="featureImage">
                                                            <div>
                                                                <a href="#"> 
                                                                    <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/denver-colorado-skyline-300x250.jpg" alt="" width="300" height="250" /> 
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className="vertSpace">
                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                        </td>
                                                        <td className="feature">
                                                            <div className="featureTitle">
                                                                <a href="#"> The 5 biggest private funds investing in mining</a>
                                                            </div>
                                                            <div className="articlePadding">
                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                            </div>
                                                            <div className="featureText">
                                                                <p>Denver is the global capital of private capital raising for investment in the metals and mining sector.</p>
                                                            </div>
                                                            <div className="articlePadding">
                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#"> 
                                                <div id="sp1-div">
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
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
                                                                                <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/bhps-escondida-mine-strike-becomes-chiles-longest-talks-end-with-no-deal-150x125.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/bhps-escondida-mine-strike-becomes-chiles-longest-talks-end-with-no-deal-150x125.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/bhps-escondida-mine-strike-becomes-chiles-longest-talks-end-with-no-deal-150x125.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/bhps-escondida-mine-strike-becomes-chiles-longest-talks-end-with-no-deal-150x125.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
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
                                                                                <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/bhps-escondida-mine-strike-becomes-chiles-longest-talks-end-with-no-deal-150x125.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="#"> 
                                                                <div id="sp2-div">
                                                                </div>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/bhps-escondida-mine-strike-becomes-chiles-longest-talks-end-with-no-deal-150x125.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="articleImage">
                                                                            <div className="image">
                                                                                <a href="#"> 
                                                                                <img title="" src="http://www.mining.com/wp-content/uploads/2017/03/bhps-escondida-mine-strike-becomes-chiles-longest-talks-end-with-no-deal-150x125.jpg" alt="" width="150" height="125" /> </a>
                                                                            </div>
                                                                        </td>
                                                                        <td className="vertSpace">
                                                                            <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" />
                                                                        </td>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="#"> 
                                                <div id="sp3-div">
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
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
                                                                                <a href="#">Columbus discovered a gold mine </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="articleBlock">
                                                            <table  cellSpacing="0" cellPadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="article">
                                                                            <div className="articleTitle">
                                                                                <a href="#">BHP's Escondida mine strike becomes Chile&rsquo;s longest, talks end with no deal </a>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
                                                                            </div>
                                                                            <div className="articleText">
                                                                                <p>The company said it will try to restart operations at the world's largest copper mine as soon as possible.</p>
                                                                            </div>
                                                                            <div className="articlePadding">
                                                                                <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" />
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
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div><a title="1 Day Spot Gold Price" href="#"> <img src="http://charts.infomine.com?160" alt="1 Day Spot Gold Price" /></a></div>
                                                        </td>
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="38" height="1" /></td>
                                                        <td>
                                                            <div><a title="1 Month Copper Price" href="#"> <img src="http://www.infomine.com/ChartsAndData/GraphEngine.ashx?z=t&amp;g=127669&amp;dr=1m" alt="1 Month Copper Price" /></a></div>
                                                        </td>
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="37" height="1" /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>
                                                <div><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" /></div>
                                                <a href="#">Read more news on MINING.com &raquo;</a>
                                                <div><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" /></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <table  cellSpacing="0" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div><a title="Find MINING.com on Facebook" href="#"> <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/facebook.jpg" alt="Find MINING.com on Facebook" width="200" height="53" /> </a></div>
                                                        </td>
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="8" height="1" /></td>
                                                        <td>
                                                            <div><a title="Follow MINING.com on Twitter" href="#"> <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/twitter.jpg" alt="Follow MINING.com on Twitter" width="200" height="53" /> </a></div>
                                                        </td>
                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="7" height="1" /></td>
                                                        <td>
                                                            <div><a title="Subscribe to the RSS Feed" href="#"> <img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/rss.jpg" alt="Subscribe to the RSS Feed" width="200" height="53" /> </a></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
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
                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="2" /></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div><a href="#">Home</a> <a href="#">Gold</a> <a href="#">Coal</a> <a href="#">Copper</a> <a href="#">Iron Ore</a> <a href="#">Oil Sands</a> <a href="#">Rare Earth</a> <a href="#">Silver</a> <a href="#">Uranium</a></div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="2" /></td>
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
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div><a href="#">About Us </a> | <a href="#">Privacy Policy</a> | <a href="#">Unsubscribe </a> | <a href="#">Contact Us </a> | <a href="#">Advertise </a></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>This email was sent to you by InfoMine Inc. Suite 900, 580 Hornby Street, Vancouver, BC, Canada V6C 3B6 | +1 604 683 2037 | <a href="#">cem@infomine.com</a>. Please visit <a href="#">cem.infomine.com</a> for more information. Copyright InfoMine.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>You are receiving this email because the email address [[$E:Email$]] was subscribed to the MINING.com email list "[[$M:ListName$]]". You may <a href="#">unsubscribe</a> at any time.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="5" /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>The information contained in &ldquo;Mining News Digest&rdquo; is collected from a variety of sources on a &ldquo;best intentions&rdquo; basis. InfoMine Inc. makes no representation or offers no warranty with respect to the adequacy of the information for any particular purpose. Any information presented in &ldquo;Mining News Digest&rdquo; is not a solicitation to purchase or acquire any securities. Use of this service is an acceptance of this disclaimer. Visit our web site to read our <a href="#">complete disclaimer</a>.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="http://www.mining.com/wp-content/themes/Kessel/digests/common/assets/images/template/padding.gif" alt="" width="1" height="10" /></td>
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
        id: state.mainpanel.id
    }
    
}

DigestTemplate = connect(mapStateToProps)(DigestTemplate)

export default DigestTemplate;