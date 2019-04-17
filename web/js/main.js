function block(e) {
  e = (e || e.event);
  if (e.keyCode == 123) {
    return false;
  }
}

document.onkeypress
= document.onkeydown
= document.onmousedown
= block;

document.onkeydown = function(e) {
 if (
  e.keyCode == 123
  || e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)
  || e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)
  || e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)
  || e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)
 ) {
  return false;
 }
}

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
}, false);
