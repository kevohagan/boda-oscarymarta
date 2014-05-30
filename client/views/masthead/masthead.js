

Template.masthead.rendered = function() {
	$('#element').attr('data-stellar-ratio', 1.1);
  	$.stellar();

 if(screen.width >= 600){
  	$(window).scroll(function(){

  	//segun distancia de scroll pone un filtro, podríamos hacer efecto parallax..
    st = $(window).scrollTop();

    vt=1-(st/500);


    if(st>500){
    	st=500;
    }


    $('#backgroundimage').css({"-webkit-filter": "blur("+Math.floor((st * .05)) + "px)" });
    $('#backgroundimage').css({"filter": "blur("+Math.floor((st * .05)) + "px)" });

   
	
    });

     }
}