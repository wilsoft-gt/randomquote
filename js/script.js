function randomQuote() {
  $.getJSON("https://fathomless-garden-32766.herokuapp.com/api/random/?format=json", function (json) {
  	console.log()
    $('.quote').text('\"' + json.results[0].quote_quote + '\"');
    $('.quoteFooter').text(json.results[0].quote_author)
    twitterShare.setAttribute("href", "https://twitter.com/share?url=&via=wilsoftGM&related=&text=" + encodeURIComponent(json.results[0].quote_quote + "\n" +json.results[0].quote_author)+ " -- ");
    tumblrShare.setAttribute("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes%2Cwilsoftbl&caption=" + encodeURIComponent(json.results[0].quote_author)+"&content=" +encodeURIComponent(json.results[0].quote_quote)+ "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&_format=html");
  });
}


