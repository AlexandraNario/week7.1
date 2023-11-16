//Write a 3 functions - reverseVowelsAndReplaceL(), reverseVowelsAndReplaceO(), reverseVowelsAndReplaceS(). Apply the following rules:

//Each function will receive a string, sometimes provided by other functions
//Each function should reverse the string
//Each function should console.log the reverse string
//Use .split(), .join(), .includes() and .replace()

//reverseVowelsAndReplaceL():
//Replaces all 'L's (uppercase and lowercase) with '1's (ones)
//Calls reverseVowelsAndReplaceO() while providing it reverseVowelsAndReplaceL’s reversed string
//reverseVowelsAndReplaceO():
//Takes reverseVowelsAndReplaceL’s reversed string and reverses it AGAIN
//Replaces all 'O's (uppercase and lowercase) with '0's (zeros)
//Calls reverseVowelsAndReplaceS() while providing it reverseVowelsAndReplaceO’s reversed string
//reverseVowelsAndReplaceS():
//Replaces all 'S's (uppercase and lowercase) with '5's (fives)
//Consoles and returns the final reversed string
  

function reverseVowelAndReplaceL(inputString) {
    //function to check if a character is a vowel
    function isVowel(char) {
      //.includes only involves the characters that are a vowel
      return 'aeiouAEIOU'.includes(char);
  }
    //.split takes string, iterates over the character, and converts each to an array element
    //if so we will store it in our values array
  
    const characters = inputString.split('');
  //using the filter method, we will check if the element in our character(char) array is a vowel
    const vowels = characters.filter(char => isVowel(char));
  console.log(vowels);
    //reverse the order of the vowels to restore the original order
    //drop a few console.logs to see what is going on and where you might have gone wrong
    const reversedVowels = vowels.reverse();
    console.log(`reversedVowels`, reversedVowels);
  
    //replace the vowels with the reversed vowels to restore the original vowels
    let vowelIndex = 0;
    for(let i = 0; i < characters.length; i++) {
      if(isVowel(characters[i])) {
        console.log(`${characters[i]} is a vowel`)
        characters[i] = reversedVowels[vowelIndex];
        vowelIndex++;
      } 
    }
    //Replaces all 'L's (uppercase and lowercase) with '1's (ones)
    
    for(let i = 0; i < characters.length; i++) {
      if(characters[i] === 'L'|| characters[i] === 'l') {
        characters[i] = '1';
      }
    }
    
    console.log(`characters`, characters);
  
    //.join() joins the characters back into the string
    const result = characters.join ('');
    console.log(`result`, result);
    //only thing is reverseL should technically be calling reverseO
  //feed the reverseVowelandReplaceO function the result because the result is techincally the final array turned into a string
    reverseVowelAndReplaceO(result);
    
  }
  
  function reverseVowelAndReplaceO(inputString){
      //function to check if a character is a vowel
      function isVowel(char) {
        return 'aeiouAEIOU'.includes(char);
    }
      //.split takes string, iterates over the character, and converts each to an array element
      //if so we will store it in our values array
      const characters = inputString.split('');
    //using the filter method, we will check if the element in our character(char) array is a vowel
      const vowels = characters.filter(char => isVowel(char));
    console.log(vowels);
      //reverse the order of the vowels to restore the original order
      //drop a few console.logs to see what is going on and where you might have gone wrong
      const reversedVowels = vowels.reverse();
      console.log(`reversedVowels`, reversedVowels);
  
      //replace the vowels with the reversed vowels to restore the original vowels
      let vowelIndex = 0;
      for(let i = 0; i < characters.length; i++) {
        if(isVowel(characters[i])) {
          console.log(`${characters[i]} is a vowel`)
          characters[i] = reversedVowels[vowelIndex];
          vowelIndex++;
        } 
      }
      //Replaces all 'o's (uppercase and lowercase) with '0's 
  
      for(let i = 0; i < characters.length; i++) {
        if(characters[i] === 'o'|| characters[i] === 'O') {
          characters[i] = '0';
        }
      }
  
      console.log(`characters`, characters);
  
      //join the characters back into the string
      const result = characters.join ('');
      console.log(`result`, result);
      //only thing is reverseL should technically be calling reverseO
    //feed the reverseVowelandReplaceO function the result because the result is techincally the final array turned into a string
      reverseVowelAndReplaceS(result);
  }
  
  function reverseVowelAndReplaceS(inputString){
      //function to check if a character is a vowel
      function isVowel(char) {
        return 'aeiouAEIOU'.includes(char);
    }
      //.split takes string, iterates over the character, and converts each to an array element
      //if so we will store it in our values array
      const characters = inputString.split('');
    //using the filter method, we will check if the element in our character(char) array is a vowel
      const vowels = characters.filter(char => isVowel(char));
    console.log(vowels);
      //reverse the order of the vowels to restore the original order
      //drop a few console.logs to see what is going on and where you might have gone wrong
      const reversedVowels = vowels.reverse();
      console.log(`reversedVowels`, reversedVowels);
  
      //replace the vowels with the reversed vowels to restore the original vowels
      let vowelIndex = 0;
      for(let i = 0; i < characters.length; i++) {
        if(isVowel(characters[i])) {
          console.log(`${characters[i]} is a vowel`)
          characters[i] = reversedVowels[vowelIndex];
          vowelIndex++;
        } 
      }
      //Replaces all 's's (uppercase and lowercase) with '5's
  
      for(let i = 0; i < characters.length; i++) {
        if(characters[i] === 'S'|| characters[i] === 's') {
          characters[i] = '5';
        }
      }
  
      console.log(`characters`, characters);
  
      //join the characters back into the string
      const result = characters.join ('');
      console.log(`result`, result);
      //only thing is reverseL should technically be calling reverseO
    //feed the reverseVowelandReplaceO function the result because the result is techincally the final array turned into a string
      return result;
  }
  
  reverseVowelAndReplaceL("Hello Worlds");