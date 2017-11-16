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
        $("#output").text("This doesn't have the correct amount of syllables to be a haiku! 😡");
      }
    } else {
      $('#output').text("This doesn't have the correct amount of lines to be a haiku! 😡");
    }
  });
});
