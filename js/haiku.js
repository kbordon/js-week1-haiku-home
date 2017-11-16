export class Haiku {
  constructor(text) {
    this.text = text;
    this.lines = [];
  }

  linesAreValid() {
    let lineArr = this.text.split(/\r\n|\r|\n/g);
    let lineHasNoLetters = false;
    const letters = /[a-z]+/i;

    // if text has 3 lines
    if (lineArr.length === 3) {
      // validates if lines have letters
      lineArr.forEach(function(line){
        let lineLetters = line.match(letters);
        if(lineLetters === null || lineLetters === "") {
          // if lines have no letters
          lineHasNoLetters = true;
        }
      });
      if (lineHasNoLetters) {
        // if line is invalid
        return false;
      } else
      {
        // has 3 valid lines
        for(let i = 0; i < 3; i++){
          this.lines[i] = lineArr[i];
        }
        return true;
      }
    }
    // if text has more or less than 3 lines
    else {
      return false;
    }
  }

  countSyllables(line) {
    let wordArr = line.split(" ");
    let syllableCount = 0;
    const vowels = ["A","E","I","O","U","Y"];
    wordArr.forEach(function(word){
      for (let i = 0; i < word.length; i++) {
        // checks if letter is vowel and letter before it is not a vowel, and adds to syllable count if true
        if(vowels.includes(word.charAt(i).toUpperCase()) && !vowels.includes(word.charAt(i-1).toUpperCase())){
          syllableCount++;
        // if two vowels next to each other, checks if followed by double consonant letters and adds to syllable count if true
        } else if (vowels.includes(word.charAt(i).toUpperCase()) && vowels.includes(word.charAt(i-1).toUpperCase()) )
        {
          if( word.charAt(i+1) == word.charAt(i+2) && word.charAt(i+1) != "" && !vowels.includes(word.charAt(i+1).toUpperCase())){
            syllableCount++;
          }
        }
      }
      // if word ends with an e, checks if letter two places before is a vowel. if true, subtracts from syllable count
      if(word.charAt(word.length-1).toUpperCase()=== "E" && vowels.includes(word.charAt(word.length - 3).toUpperCase())){
        //write in code tomorrow to account for the such as if syllable count != 1
        syllableCount--;
      }
    });
    return syllableCount;
  }
}
