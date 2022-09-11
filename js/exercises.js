(function() {
    'use strict';
  
    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------
  
  function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
  }
  
    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------
  
  function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);

  }
  
    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------
  
  function isVowel(str) {
    if (str === 'a') {
        return true;
    } else if (str === 'e') {
        return true;
    } else if (str === 'i') {
        return true;
    } else if (str === 'o') {
        return true;
    } else if (str === 'u') {
        return true;
    }
    else {
        return false;
    }
};

    
  
  
    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------
    
    // Notes
    //let and const are block scope 
    // var is function scoped
    // for loops are more manuel and you can control how you increment so you want hit every item
    // You can choose where you start in for loops
    // You can also exit early if wanted
    // "+" is loaded
    // .split string based on where you target 
    // "" .split will split every character in the string
    // only use var when you need to hoist
    // use let when the value is going to change
    // "!" is the not operator and it just flips. ex (if something is true it changes it to false)
    // javascript hits in order
    // if we called joined against an array it puts it together

    function rovarspraket(text) {
        let translatedText = "";

        for(let i = 0; i < text.length; i++) {
            if('list of consonants'.includes(text[i])) {
                translatedText +=
                translatedText = translatedText + text[i] + 'o' + text[i];
            }
            else {
                translatedText = text[i];
            }
        }
        return translatedText
    }
  
    
        

    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------
    function sum(arr) {
        let result = 0;
        for (const num of arr) {
            result = result + num;
            console.log(result);
        } 
        return result;
    }

    function multiply(arr) {
        let result = 1;
        for (const num of arr) {
            result = result * num;
            console.log(result);
        } 
        return result;

    }
  
    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------
  
    function reverse(str) {
        let splitString = str.split();
        reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        
        return joinArray
    }
  
    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------
  



    function findLongestWord(arr) {
        let word = "";
        for (i = 0; i < arr.length; i++) {
            if (word.length < arr[i].length){
                word = arr[i];
            }
        }
        return word.length
    }


  
    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------
  
    function filterLongestWord(arr, j) {
        const result  = [];

        for (let j = 0; j < arr.length; j++) {
            if(arr[j].length > i ){
                result.push(arr[j])

            }
        }

        return result;
    }
  
    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------
  
    function charFreq(str) {
        const freqList = {}; // initialize an empty object (this is where we keep track of our frequency count)
    const strArray = str.split(''); // this will split the string into an array of strings (e.g. 'friyay' => ['f', 'r', 'i', 'y', 'a', 'y'])
    for(let i = 0; i < strArray.length; i++){
        const char = strArray[i];
        if(freqList[char] !== undefined){
            freqList[char] = freqList[char] + 1;
        } else {
             freqList[char] = 1;
        }
    }
    return freqList;
}
    }
  
    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////
  
    console.assert(max(2, 4) === 4, 'function max error');
  
    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');
  
    console.assert(isVowel('a') === true, 'ERROR function isVowel');
  
    console.assert(isVowel('b') == false, 'ERROR function isVowel');
  
    //console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');
  
    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');
  
    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');
  
    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');
  
    console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');
  
    console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  })();