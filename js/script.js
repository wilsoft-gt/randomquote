function randomQuote() {
  $.getJSON("https://fathomless-garden-32766.herokuapp.com/api/random/", function (json) {
    $('.quote').text('\"' + json.quote_quote + '\"');
    $('.quoteFooter').text(json.quote_author)
    twitterShare.setAttribute("href", "https://twitter.com/share?url=&via=wilsoftGM&related=&text=" + encodeURIComponent(json.quote + "\n" +json.author)+ " -- ");
    tumblrShare.setAttribute("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes%2Cwilsoftbl&caption=" + encodeURIComponent(json.author)+"&content=" +encodeURIComponent(json.quote)+ "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&_format=html");
  });
}


