$(document).ready(function(){
  $('#digest-select').change(function(){
    var value = $(this).val();
    //https://pubads.g.doubleclick.net/gampad/ad?iu=/1043744/Digest-Sponsored-Post-2_615x150&sz=615x150&c=[555444222]&t=digest%3Dcopper"
    //src="https://pubads.g.doubleclick.net/gampad/ad?iu=/1043744/Digest-Medium-Rectangle-2_300x250&sz=300x250&c=[1231231]&t=digest%3Dcopper"
    var sp2img = "https://pubads.g.doubleclick.net/gampad/ad?iu=/1043744/Digest-Sponsored-Post-2_615x150&sz=615x150&c=[555444222]&t=digest%3D"+value;
    var sp2a = "http://www.mining.com/dfpclick.php?adunit=Digest-Sponsored-Post-2_615x150&size=615x150&cbuster=[555444222]&target=digest%3D"+value;
    var ba2img = "https://pubads.g.doubleclick.net/gampad/ad?iu=/1043744/Digest-Medium-Rectangle-2_300x250&sz=300x250&c=[1231231]&t=digest%3D"+value;
    var ba2a = "http://www.mining.com/dfpclick.php?adunit=Digest-Medium-Rectangle-2_300x250&size=300x250&cbuster=[1231231]&target=digest%3D"+value;
    $('#sp2').attr("src",sp2img);
    $('#ba2').attr("src",ba2img);
    $('#sp2-a').attr("href",sp2a);
    $('#ba2-a').attr("href",ba2a);
  });
});
