window.addEventListener('resize', function() {
    var circle = document.querySelector('.circle');
    if (window.innerWidth > window.innerHeight) {
        circle.style.height = 80 + '%';
        var height = circle.offsetHeight;
        circle.style.width = height + 'px';
        var leftValue = (window.innerWidth - height) / 2;
        var topValue = (window.innerHeight - height) / 2;
        circle.style.left = leftValue + 'px';
        circle.style.top = topValue + 'px';
    } else {
        circle.style.width = 80 + '%';
        var width = circle.offsetWidth;
        circle.style.height = width + 'px';
        var leftValue = (window.innerWidth - width) / 2;
        var topValue = (window.innerHeight - width) / 2;
        circle.style.left = leftValue + 'px';
        circle.style.top = topValue + 'px';
  }
});
window.dispatchEvent(new Event('resize'));