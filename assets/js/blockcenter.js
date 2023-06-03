window.addEventListener('resize', function() {
  var circle = document.querySelector('.circle');
  var width = circle.offsetWidth;
  var leftValue = window.innerWidth/2 - (width/2);
  var topValue = window.innerWidth/2 - (width/2);
  circle.style.height = width + 'px';
  circle.style.left = leftValue + 'px';
  circle.style.top = topValue + 'px';
});
window.dispatchEvent(new Event('resize'));