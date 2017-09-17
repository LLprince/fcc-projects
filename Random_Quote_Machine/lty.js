var currentQuote;
var currentAuthor;
function getQuote() {  //通过ajax获取到名人名言的数据
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function (r) {
      if (typeof r === 'string') {
       r = JSON.parse(r);
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
      $(".span_01").html(currentQuote);
      $(".span_02").html(currentAuthor);
    }
  });
}
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
$(document).ready(function () {
  getQuote();
  $("#getQuote").on('click',getQuote);
  $(".shareTwitter").on('click',function(){ //分享到推特的点击事件
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  });
});
