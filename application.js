var soCool;

$(document).ready(function(){
  console.log("hotdog");
  soCool();
})

soCool = function(){
  // var p = document.getElementsByTagName('p');
  var p = document.querySelector('p');
  console.log(p);
  p.style.color = "red"
}

lessCool = function(){
  $('h4').css('style', 'italic');
}