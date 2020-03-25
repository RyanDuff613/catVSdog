$(document).ready(function() {
  
  $('#meow').click(function(){
    $('#output').prepend('<li>woof</li>');
  });
  
  $('#bark').click(function(){
    $('#output').prepend('<li>meow</li>');
  });

  $('#silence').click(function(){
    $('#output').children().remove();
    $('#image').remove();
  });

  $('#hey').click(function(){
    $('#output').before('<p>"HEY! SHUT-UP"</p>');
  });

  $('#imageBtn').click(function(){
    $('#imageHolder').after('<img id="image" src=images/pic1.jpg>');
  });

});