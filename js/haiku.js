export class Haiku {
  constructor(text) {
    this.text = text;
    this.lines = [];
    this.syllables = [];
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
          console.log(word +" word has one vowel syllable");
          syllableCount++;
        // if two vowels next to each other, checks if followed by double consonant letters and adds to syllable count if true
        } else if (vowels.includes(word.charAt(i).toUpperCase()) && vowels.includes(word.charAt(i-1).toUpperCase()) )
        {
          if(word.charAt(i).toUpperCase() === "I" && (word.charAt(i+1).toUpperCase() === "N" && word.charAt(i+2).toUpperCase() === "G")){
            console.log(word +" word has two vowel syllable with ing");
            syllableCount++;
          } else if(word.charAt(i+1) === word.charAt(i+2) && word.charAt(i+1) != "" && !vowels.includes(word.charAt(i+1).toUpperCase())){
            console.log(word +" word has two vowel syllable with double consonant");
            syllableCount++;
          }
          // else if (word.charAt(i+1).toUpperCase() == "N" && word.charAt(i+2).toUpperCase() == "G") {
          //   syllableCount++;
          // }
        }
        // if word has e, checks if is a silent e by seeing if letter two places before is a vowel. if true, subtracts from syllable count
        // remove the last conditional if too much
        if(word.charAt(i).toUpperCase()=== "E" && vowels.includes(word.charAt(i-2).toUpperCase()) && word.charAt(i-2).toUpperCase() != "E" ){
          //write in code tomorrow to account for the such as if syllable count != 1
          console.log(word +" word has silent e vowel so remove syllable");
          syllableCount--;
        }
      }
      // if word ends with an a, checks if letter before is an i. if true, subtracts from syllable count
      if( word.charAt(word.length-1).toUpperCase()=== "A" && word.charAt(word.length - 2).toUpperCase() === "I" ){
        //write in code tomorrow to account for the such as if syllable count != 1
        console.log(word +" word is magnolia syllable");
        syllableCount++;
      }
      // if words ends with voiceless ed
      if( word.charAt(word.length-1).toUpperCase()=== "D" && word.charAt(word.length - 2).toUpperCase() === "E" && !["D", "T"].includes(word.charAt(word.length - 3).toUpperCase())){
        console.log(word +" word has silent ed vowel so remove syllable");
        syllableCount--;
      }
    });
    return syllableCount;
  }

  validateSyllablesToLine() {
    for (let i = 0; i < 3; i++)
    {
      this.syllables.push(this.countSyllables(this.lines[i]));
    }
    if (this.countSyllables(this.lines[0]) === 5 && this.countSyllables(this.lines[1]) === 7 && this.countSyllables(this.lines[2]) === 5) {
      return true;
    } else {
      return false;
    }
  }

}
