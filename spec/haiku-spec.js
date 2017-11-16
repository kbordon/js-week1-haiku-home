import { Haiku } from './../js/haiku.js';

describe('Haiku', function(){
  let testString;

  beforeEach(function() {
    // set up before each test.
  });

  it('it will create a Haiku object and set the text property', function() {
    let newHaiku = new Haiku("this is not really a haiku");
    expect(newHaiku.text).toEqual(`this is not really a haiku`);
  });

  it('it will check if Haiku has three lines', function() {
    testString = `this
      has three
      lines`;
    let newHaiku = new Haiku(testString);
    expect(newHaiku.linesAreValid()).toEqual(true);
  });

  it(`it will check if Haiku doesnt have three lines`, function() {
    let testString2 = `this
                      has
                      too
                      many
                      lines`;
    let newHaiku = new Haiku(testString2);
    expect(newHaiku.linesAreValid()).toEqual(false);
  });

  it(`it will check if Haiku has empty lines`, function() {
    let testString3 = `

    `;
    let newHaiku = new Haiku(testString3);
    expect(newHaiku.linesAreValid()).toEqual(false);
  });

  it(`it will save each line of a 3-lined Haiku to line property`, function() {
    let newHaiku = new Haiku(testString);
    newHaiku.linesAreValid();
    expect(newHaiku.lines[0]).toEqual(`this`);
  });

  it(`it will count a syllable of one word`, function() {
    let newHaiku = new Haiku(testString);
    newHaiku.linesAreValid();
    expect(newHaiku.countSyllables(newHaiku.lines[0])).toEqual(1);

  });

  it(`it will count one sylllable for a multi-vowel syllable word`, function(){
    let newHaiku = new Haiku(`boat
      I'm on a
      boat`);
      newHaiku.linesAreValid();
      expect(newHaiku.countSyllables(newHaiku.lines[0])).toEqual(1);
  });

  it(`it will not count a syllable if it is the letter e at the end of a word`, function(){
    let newHaiku = new Haiku(`surface
      surface
      surface`);
      newHaiku.linesAreValid();
      expect(newHaiku.countSyllables(newHaiku.lines[0])).toEqual(2);
  });

  it(`it will count a syllable if it ends with the letter e at the end of a word and is preceeded by two consonants`, function(){
    let newHaiku = new Haiku(`massacre
      massacre
      massacre`);
      newHaiku.linesAreValid();
      expect(newHaiku.countSyllables(newHaiku.lines[0])).toEqual(3);
  });

  it(`it will count a syllable of two adjacent vowels separately if followed by double consonants`, function(){
    let newHaiku = new Haiku(`sienna
      sienna
      sienna`);
      newHaiku.linesAreValid();
      expect(newHaiku.countSyllables(newHaiku.lines[0])).toEqual(3);
  });

  it(`it will count the syllables of a line`, function() {
    let newHaiku = new Haiku(`A bloody knife blade
                              Is being licked by a cat
                              At hog-killing time.`);

    newHaiku.linesAreValid();
    let result = newHaiku.validateSyllablesToLine();
    expect(result).toEqual(true);
  });
});
