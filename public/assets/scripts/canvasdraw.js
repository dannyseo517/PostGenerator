$(document).ready(function(){
  $('input[name=posttype]').change(function(){
    var selectid = this.id;
    var arr = selectid.split("-");
    var divid = arr[0]+"-div";
    checkExists(divid);
    $("#"+arr[0]+"-"+"sp").toggle();
    $("#"+arr[0]+"-"+"ba").toggle();
  });
});

$(function() {
  $("#btnSave").click(function() {
      html2canvas(document.body, {
          onrendered: function(canvas) {
            var a = document.createElement('a');
            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'digest.jpg';
            a.click();
            //return Canvas2Image.saveAsPNG(canvas);
          }
      });
  })
});

// toggles the digest and form fields to preview
function previewDigest() {
  $('.section').toggle();
  $('.sp-form').toggle();

}

function checkExists(node) {
  var check = document.getElementById(node);
  if (check) {
    check.parentNode.removeChild(check);
  }
}
//character counter for textarea
function textCounter(field,max) {
  var countfield = document.getElementById(field.id+"-counter");
  countfield.value = max - field.value.length;
}

// loads the image based on image selected in form
function loadImage(spid,imgid,posttype) {
    var input, file, fr, img;
    var canvasid = spid+"-canvas";
    var divid = spid+"-div";
    var errorid = "errorMsg";
    var tdid = spid+"-td";

    checkExists(errorid);
    checkExists(canvasid);
    checkExists(divid);

    input = document.getElementById(imgid);

    file = input.files[0];
    fr = new FileReader();
    fr.onload = createImage;
    fr.readAsDataURL(file);

    function createImage() {
        img = new Image();
        img.src = fr.result;
        img.onload = function (){
          // image must be square dimensions
          if (posttype == "sp" && this.width == this.height ) {
            imageLoaded();
          } else if (posttype == "ba" && this.width == "300" && this.height == "250" ){
            bannerLoaded();
          } else if (posttype == "fsp" && this.width == this.height ){
            imageLoaded();
          } else {
              var errorMsg = document.createElement('p');
              errorMsg.id = errorid;
              errorMsg.style.color = "red";
              var textNode = "";
              if (posttype =="sp") {
                  textNode = document.createTextNode("Image must be square");
              } else if (posttype == "ba") {
                  textNode = document.createTextNode("Image must be 300x250");
              } else {
                textNode = document.createTextNode("Error");
              }
              var errordiv = document.createElement('div');
              errordiv.id = divid;
              document.getElementById(tdid).appendChild(errordiv);
              errorMsg.appendChild(textNode);
              document.getElementById(divid).appendChild(errorMsg);
          }
        };

    }
    function bannerLoaded() {
      var canvasdiv = document.createElement('div');
      canvasdiv.id = divid;
      canvasdiv.class = "sp-div";
      document.getElementById(tdid).appendChild(canvasdiv);
      $("#"+divid).css("width","300");
      $("#"+divid).css("margin","auto");

      var canvas = document.createElement('canvas');
      document.getElementById(divid).appendChild(canvas);
      canvas.id     = canvasid;

      canvas.width  = 300;
      canvas.height = 250;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img,0,0,300,250);
    }

    function imageLoaded() {
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

        if (posttype == "fsp") {
          canvaswidth = 340;
          canvasheight = 250;
          headerlineheight=21;
          textxstart = 0;
          textxstop = canvaswidth-imgwidth-gutter;
          mainlineheight = 17;
          mainy = headerlineheight*3 + mainlineheight;
          footery = 140;
          sponsorlineheight = 13;
        }
        // create new canvas based
        var canvasdiv = document.createElement('div');
        canvasdiv.id = divid;
        canvasdiv.class = "sp-div";
        document.getElementById(tdid).appendChild(canvasdiv);
        var canvas = document.createElement('canvas');
        document.getElementById(divid).appendChild(canvas);
        canvas.id     = canvasid;
        canvas.width  = canvaswidth;
        canvas.height = canvasheight;
        var ctx = canvas.getContext("2d");

        // Canvas draw settings. One for mining.com digest and one for foreign edition digests
        if (posttype == "fsp") {
          ctx.drawImage(img,canvaswidth-imgwidth,3*headerlineheight,imgwidth,imgheight);
          // add header and body text
          ctx.font = "bold 17px Arial";
          ctx.fillStyle = '#444444';
          var titleText = document.getElementById(spid+"-header").value;
          multiline = wrapText(ctx,titleText,0,headerlineheight,canvaswidth,headerlineheight);
          ctx.font = "13px Arial";
          ctx.fillStyle = '#000000';
          var bodyText = document.getElementById(spid+"-body").value;
          multiline = wrapText(ctx,bodyText,textxstart,mainy,textxstop,mainlineheight);
          //sponsor footer
          ctx.font = "11px Arial";
          ctx.fillStyle = '#cccccc';
          var sponsor = "SPONSOR"
          metrics = ctx.measureText(sponsor);
          ctx.fillText(sponsor,canvaswidth-metrics.width,canvasheight-sponsorlineheight,canvaswidth);
          /*ctx.font="14pt Arial";*/
        } else if (posttype == "sp")
        {
          ctx.drawImage(img,0,0,150,150);
          // add header and body text
          ctx.font = "bold 20px Arial";
          ctx.fillStyle = '#044869';
          var titleText = document.getElementById(spid+"-header").value;
          multiline = wrapText(ctx,titleText,textxstart,topy,textxstop,headerlineheight);
          if (!multiline) {
            mainy = mainy - headerlineheight;
          }
          ctx.font = "14px Arial";
          ctx.fillStyle = '#333333';
          var bodyText = document.getElementById(spid+"-body").value;
          multiline = wrapText(ctx,bodyText,textxstart,mainy,textxstop,mainlineheight);
          //sponsor footer
          ctx.fillStyle = '#cccccc';
          ctx.fillText("SPONSOR",textxstart,footery,textxstop);
          /*ctx.font="14pt Arial";*/
        }
        // creates image

    }

    //wordwrap function
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
}
