/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(number1, number2){
    "use strict";
    //...
    if (number1 < number2){
      return number2;
    }else{
      return number1;
    }

}
  console.log(max(10, 15));
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(number1, number2, number3){
    "use strict";
    //...
    if (number1 > number2 > number3){
    return number1;
  }else if(number2 > number1 > number3){
    return (number2)
  }else {
    return (number3);
  }

}
console.log(maxOfThree(10,22,44));
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if (char === 'a' || char === 'e'|| char === 'i' || char === 'o' || char === 'u'){
      return true;
    }else{
      return false;
    }
}
console.log(isVowel('t'));

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
    var translation = "";
    var char = "";
  for (var i=0; i<phrase.length; ++i){
    var char = phrase[i];


    if  (!isVowel(char)) {
      translation += char + 'o' + char;
    }else {
      translation += char;
    }
  }
  return translation;
}
console.log(rovarspraket('this is fun'));
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbersToAdd){
    "use strict";
    var total = 0;

    for (var i=0; i<numbersToAdd.length; i++){
      total += numbersToAdd[i];
    }
    return total;
}
console.assert(sum([1,2,3,4]));

function multiply(numbersToMultiply){
    "use strict";
    var product = numbersToMultiply[0];
    for (var i=0; i<numbersToMultiply; i++){
      product += numbersToMultiply[i];
    }
    return product;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
  return phrase.split('').reverse().join('');
    }

}
//console.log(reverse('jag testar'));
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    var longestLength = 0;

    for(var i=0; i<words.length; i++){
      var word = words[i];

      if(word.length > longestLength){
        longestLength = world.length;
      }
    }
    return longestLength
}
console.assert(findLongestWord(['Pride and Pre']));
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
