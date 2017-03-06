var elem = document.getElementById('draw');
var dwidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var dheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var two = new Two({ width: dwidth, height: dheight }).appendTo(elem);

function Colors(){
    var r = (Math.round(Math.random()* 125) + 72).toString(16);
    var g = (Math.round(Math.random()* 127) + 50).toString(16);
    var b = (Math.round(Math.random()* 120) + 127).toString(16);
    return '#' + r + g + b;
}


function makeC(){
	var x = (dwidth*(rand()*10))/100;
	var y = (dheight*(rand()*10))/100;

	var circle = two.makeCircle(x,y,500);
	circle.fill = Colors();
	circle.noStroke();

	return circle;
}


function makeT(){
	var x = (dwidth*(rand()*10))/100;
	var y = (dheight*(rand()*10))/100;

	var polygon = two.makePolygon(x, y, 20, 3);
	polygon.noFill();
	polygon.stroke = Colors();
	polygon.linewidth = 5;

	return polygon;
}


var circles = [makeC() , makeC() , makeC()];
var triangles = [makeT() , makeT() , makeT() , makeT() , makeT() , makeT() , makeT() , makeT() , makeT()];


two.bind('update', function(frameCount) {

  circles.forEach(function(circle){
     if ( circle.scale > 0.9999) {
	     circle.scale = rand()*0.05;
	  }

	  var t = (1 -  circle.scale) * 0.001;
	  circle.scale += t;
  });

  triangles.forEach(function(tr){
  	 if (tr.scale > 0.9999) {
	     tr.scale = 0;
	  }

	  var t = (1 -  tr.scale) * 0.009;
	  tr.scale += t;
	  tr.rotation += t * 4 * Math.PI;
  });


}).play();

function rand(){
	return Math.floor(Math.random() * 10) + 1 ;
}

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top + 300
            }, 1000);
            return false;
        }
    }
});