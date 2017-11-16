import { Haiku } from './../js/haiku.js';
$(document).ready(function(){
  $("#haiku-form").submit(function(event){
    event.preventDefault();

    let haikuInput = $('#haiku-input').val();
    let newHaiku = new Haiku(haikuInput);
    if (newHaiku.linesAreValid())
    {
      let syllablesValid = newHaiku.validateSyllablesToLine();
      if (syllablesValid){
        $("#output").text("This is definitely a haiku! ✏️ 🌟🌟🌟");
      } else {
        $("#output").text(`This doesn't have the correct amount of syllables to be a haiku! 😡line 1: ${newHaiku.syllables[0]}
        line 2: ${newHaiku.syllables[1]}
        line 3: ${newHaiku.syllables[2]}`);
      }
    } else {
      $('#output').text(`This doesn't have the correct amount of lines to be a haiku! 😡`);
    }
  });
});
