function myFunction() {
  myVar = setTimeout(showPage, 1000);
  console.log('apple');
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("body").style.display = "block";
}

function r(f) {
  /in/.test(document.readyState) ? setTimeout(r, 9, f) : f()
}
r(function() {
  myFunction();
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    }

  )
});