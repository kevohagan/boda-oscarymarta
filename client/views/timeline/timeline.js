Template.timeline.rendered = function() {

 var s = document.getElementById("svgcontainer").scrollHeight;


 
  $('#svgcontainer').mousemove(function(e){

  	//segun distancia de scroll pone un filtro, podríamos hacer efecto parallax..
 

    st = e.pageY - $(this).position().top;
	$('#svgcontainer:hover svg line').css({"-webkit-transform": "translateY("+Math.floor(st) + "px)" });

    
     

    });



}
