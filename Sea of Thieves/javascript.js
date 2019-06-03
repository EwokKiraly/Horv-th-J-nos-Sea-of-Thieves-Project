$(function(){$('a[href*="#"]:not([href="#carouselgallery"])').click(function(){var target=$(this.hash);if(target.length){$("html,body").animate({scrollTop:target.offset().top},1000)}})})

var quotes = [{

  "quote": "\"All hands on deck, hence I cried, But Booty was hit, and it turned to be fried.\""
}, {

  "quote": "\"But I told them: halt this slaughter, Or you shall meet the Captain's Daughter!\""
}, {

  "quote": "\"Seas we sailed, treasures we plundered, We drank and sang, untill we were bombarded!\""
}, {

  "quote": "\"I once had a parrot, blue and red, I called it Booty, and had it fed.\""
}, {

  "quote": "\"Not one coin they shared with me, Instead they said, walk the plank, thee!\""
}, {

  "quote": "\"Untill it finally was over, And we feasted, drunk and sober.\""
}, {

  "quote": "\"I sat with my sorrows, while the men were shooting, And once it was over, they started the looting.\""
}, {

  "quote": "\"Hit here, hit there, We fought through the whole hemisphere!\""
}, {

  "quote": "\"Clearly I am not good with words, I'd rather shoot them pirates, those hordes.\""
}];

// function to load and display a new quote
function newQuote() {
  var quoteID = Math.floor(Math.random() * (quotes.length));
  $("#quote").html(quotes[quoteID].quote);
}

// wait for page load before displaying content
$(document).ready(function() {
  // load an initial quote
  newQuote();

  // retrieve a new quote when the button is clicked
  $("#generateButton").on("click", function() {
    newQuote();
  });
});

var loading;
function loading() {
  loading = setTimeout(show, 1500);
}
function show() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
}




