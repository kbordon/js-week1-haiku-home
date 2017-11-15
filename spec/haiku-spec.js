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

  })

});
