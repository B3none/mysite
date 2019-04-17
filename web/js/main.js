function block(e) {
  e = (e || window.event);
  return e.keyCode !== 123;
}

document.onkeypress = document.onmousedown = block;

document.onkeydown = function(e) {
  e = (e || window.event);
  return !(
    e.keyCode == 123
    || e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)
    || e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)
    || e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)
    || e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)
  );
}

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
}, false);
