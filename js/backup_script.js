var quotes = [
  ["Don't cry because it's over, smile because it happened.", "Dr. Seuss"],
  ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
  ["So many books, so little time.", "Frank Zapata"],
  ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch"],
  ["You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.","William W. Purkey"],
  ["A room without books is like a body without a soul.","Marcus Tullius Cicero"],
  ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.","Dr. Seuss"],
  ["You only live once, but if you do it right, once is enough.","Mae West"],
  ["Be the change that you wish to see in the world.","Mahatma Gandhi"],
  ["In three words I can sum up everything I've learned about life: it goes on.","Robert Frost"],
  ["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","J.K. Rowling, Harry Potter and the Goblet of Fire"],
  ["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
  ["If you tell the truth, you don't have to remember anything.","Mark Twain"],

  //["",""],
];

// var colors = ["#007f7f", "#222222", "#687676", "#c5420a", "#d9ad00", "#794044", "#00006d", "#ff6600"];

function randomQuote() {
  var quoteElement = document.getElementById('quote');
  var quoteFooterElement = document.getElementById('quoteFooter');
  var twitterShare = document.getElementById('twitterShare');
  var tumblrShare = document.getElementById('tumblrShare');
  var randQuo = Math.floor(Math.random() * quotes.length);
  // var color = randomColor();
  quoteElement.childNodes[0].nodeValue = `\"`+quotes[randQuo][0]+`\"`;
  quoteFooterElement.innerText = "--" + quotes[randQuo][1];
  twitterShare.setAttribute("href", "https://twitter.com/share?url=&via=wilsoftGM&related=&text=" + encodeURIComponent(quotes[randQuo][0] + "\n" +quotes[randQuo][1])+ " -- ");
  tumblrShare.setAttribute("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes%2Cwilsoftbl&caption=" + encodeURIComponent(quotes[randQuo][1])+"&content=" +encodeURIComponent(quotes[randQuo][0])+ "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button&_format=html");
}


// function randomColor() {
//   return colors[Math.floor(Math.random() * colors.length)];
//
// }
