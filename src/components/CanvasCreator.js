import React, {Component} from 'react'


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

class CanvasCreator extends Component{
    constructor(props){
        super(props)
    }
    createImage(id, file, headline, body){
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
        if(file){
            var div = document.getElementById(id);
            var canvas = document.createElement("canvas");
            canvas.id = "canvas-" + id;

            var fr = new FileReader();
            fr.onload = function(){
                var ctx = canvas.getContext('2d');
                ctx.canvas.width = canvaswidth;
                ctx.canvas.height = canvasheight;
                ctx.fillStyle = '#ffffff'
                ctx.fillRect(0, 0, canvaswidth, canvasheight);
                var img = new Image();
                img.onload = function(){
                    ctx.drawImage(img, 0,0,150,150);
                    // add header and body text
                    ctx.font = "bold 20px Arial";
                    ctx.fillStyle = '#044869';
                    var titleText = headline;
                    multiline = wrapText(ctx,titleText,textxstart,topy,textxstop,headerlineheight);
                    if (!multiline) {
                        mainy = mainy - headerlineheight;
                    }
                    ctx.font = "14px Arial";
                    ctx.fillStyle = '#333333';
                    var bodyText = body;
                    multiline = wrapText(ctx,bodyText,textxstart,mainy,textxstop,mainlineheight);
                    //sponsor footer
                    ctx.fillStyle = '#cccccc';
                    ctx.fillText("SPONSOR",textxstart,footery,textxstop);
                    if(div != null){
                        div.innerHTML = "";
                        div.appendChild(canvas);
                    }
                }
                
                img.src = fr.result;
            }
            fr.readAsDataURL(file);
        }
        
    }

    render(){
        return(
            <div id={this.props.id}>
                {this.createImage(this.props.id, this.props.file, this.props.headline, this.props.body)}
            </div>
        )
    }


}

export default CanvasCreator;