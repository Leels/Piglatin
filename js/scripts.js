// THIS FUNCTION WILL TURN WORDS INTO PIG LATIN

// 1. For words beginning with a vowel, add "way" to the end.
// 2. For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
// 3. If the first consonants include "qu", move the "u" along with the "q".Don't forget about words like "squeal" where "qu" doesn't come first!
// 4. For words beginning with "y", treat "y" as a consonant.

$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    let originalString = $("input#phrase").val();
    let originalArray = originalString.split("");

    function pigLatin(originalArray) {
    let vowels = /[aeiou]/gi;
    let cutConsonants = [];
    let pigLatinWord= "";
      
      if (originalArray[0].match(vowels)) {
        pigLatinWord = originalArray.join("") + "way";
        return pigLatinWord;
      } 
        for (let i = 0; i <= originalArray.length; i ++) {
          if (!originalArray[i].match(vowels)) {
            cutConsonants.push(originalArray[i]);
          } else {
            pigLatinWord = originalArray.splice(i).join("") + cutConsonants.join("") + "ay";
          };
        };
        return pigLatinWord;
      };
    $("#result").text(pigLatin(originalArray))
  });
});
