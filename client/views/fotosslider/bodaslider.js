

Template.bodaslider.rendered = function () {
var aum;
if($(window).width() >= 600){
	aum=100;
}else{
	aum=50;
}

var currentSlide=0;
var anteriorSlide=0;
em=0;
var totalSlides=0;


var lefttotal=[];
var leftinicial=0;
var left=0;
console.log("holalaaaa");



  //posibilidad añadir clones..

   console.log("holalaaaa");
     /* items   = $('#slider-demo article')
      
      console.log(items);
      
      first   = items.filter(':first'),
      last    = items.filter(':last'),

     //clono una copia al principio y al final...
	  first.before(last.clone(true)); 
	  
	  last.after(first.clone(true));*/
	  
  

  if(em>=0){
  	
	  leftinicial=0;
  }else{
    	leftinicial=0;
  }

$('#slider-demo').imagesLoaded( function() {
  // images have loaded


var i=0;


	
	$('#slider-demo article img').each(function(){
		  //sumamos lo que miden todas las imágenes
		    left+=$(this).width();
		    lefttotal[i]=left;
		    $(this).data('image',i);
		    i++;
	});

	totalSlides=i-1;

	

	$('#slider-demo .wrapper').css({width:""+left+""});
	$('#slider-demo .wrapper').css({left:""+leftinicial+"px"});

	checkTodo();

});


	

   	var stop=true;

   	function checkTodo()
	{
			 $('#slider-demo article img').eq( anteriorSlide ).fadeTo( "slow",0.8);
   		    $('#slider-demo article img').eq( currentSlide ).fadeTo( "slow",1.0);
   		   

   		    anteriorSlide=currentSlide;

	    	if( currentSlide==0 ){

	       		$('#slider-demo .wrapper').animate({left:""+leftinicial+""},function() {});
	       		$(".arrow-left").fadeOut(0);
	       		$(".arrow-right").fadeIn(100);
		   	
	       	}else{
	       

	   		    if(lefttotal[currentSlide+1]>= $(window).width() &&  $('#slider-demo article img').eq( totalSlides ).width() + $('#slider-demo article img').eq( currentSlide ).width() < $(window).width() ) {
				  	
				  
				 	el= -lefttotal[currentSlide] + ($(window).width() - $('#slider-demo article img').eq( totalSlides ).width());
				 	
				 	$('#slider-demo .wrapper').animate({left:""+el+""});
				 	$(".arrow-right").fadeOut(0);
				 	$(".arrow-left").fadeIn(100);
	   			
	   			}else{

	    	//comprobación para que no se vea blanco...  
			 
				if(currentSlide==totalSlides){
					
					el= -lefttotal[currentSlide-1] + ($(window).width() - $('#slider-demo article img').eq( totalSlides ).width());
				 	$('#slider-demo .wrapper').animate({left:""+el+""});
				 	currentSlide-=1;
					$(".arrow-right").fadeOut(0);
					$(".arrow-left").fadeIn(100);

				}else{

			  	 
			       el= -lefttotal[currentSlide-1] + aum;
			       $('#slider-demo .wrapper').animate({left:""+el+""});
			       $(".arrow-left").fadeIn(100);
			       $(".arrow-right").fadeIn(100);

			   	}
			   
	    
	   			}

   			}
   	}


		$(".arrow-right").click(function(event){
	   		
		   	currentSlide = currentSlide + 1;

		   	checkTodo();

		   
	   });
   
	   $(".arrow-left").click(function(event){
	   	
		   	currentSlide = currentSlide - 1;

		   	checkTodo();

		   
	   });



		$('#slider-demo article img').click(function(){
				
		 		currentSlide=$(this).data('image');

		 		checkTodo();

		});


};