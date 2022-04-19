function isPalindrome(word) {
  // Write your algorithm here

  //initialize new array
  let reversedWord = []
  debugger
  //reverse the word
  for(let i=0; i < word.length; i++){
    reversedWord[word.length-(i+1)] = word[i]
  }
  if(reversedWord.join('') === word){
    return true
  }else {
    return false
  }



}

isPalindrome('mom')
/* 
  Add your pseudocode here
*/

//take in word
//reverse the word
//check if the reversed word equals input word



/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
