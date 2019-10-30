// Apple




// THIS FUNCTION WILL TURN WORDS INTO PIG LATIN

// var vowels = ["a", "e", "i", "o", "u"]
// var letters = ["a", "p", "p", "l", "e"]


$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    var originalString = $("input#phrase").val();
    var letters = originalString.split("");


    for (var i = 0; i < letters.length; i ++) {
      if (letters[0] === "a" || letters[0] ==="e" || letters[0] === "i" || letters[0] === "o" || letters[0] === "u") {
        var newLetters = letters.splice(0,1);
        letters = letters.join("") + newLetters + "way"
        console.log(letters);
      } else 
    };

  });
});
