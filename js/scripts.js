
// Apple




// THIS FUNCTION WILL TURN WORDS INTO PIG LATIN

// var letters = ["a", "p", "p", "l", "e"]


$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    var vowels = ["a", "e", "i", "o", "u"]
    var originalString = $("input#phrase").val();
    var letters = originalString.split("");


    if (vowels.includes(letters[0])) {
      var newLetters = letters.shift();
      newLetters = letters.join("") + newLetters + "way"
    } else {
      for (var i = 0; i < letters.length; i ++) {
        var cutConsonant = "";
        if (!vowels.includes(letters[0])) {
          cutConsonant = letters.shift()
          letters.push(cutConsonant)
        }
      }
        letters = letters.join("") + "ay"
    };
  });
});
