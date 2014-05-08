




Template.masterLayout.rendered = function() {

var myElement = document.querySelector("header");
// Headroom cambia clase de header segun scroll..
var headroom = new Headroom(myElement, {
  "tolerance": 5,
  "offset": 405,
  "classes": {
    "initial": "animated",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp",
    "top": "headroom--top",
    "notTop": "headroom--not-top"
  }
});

headroom.init();


}

Template.home.rendered = function() {


	// grab an element

//la imagen que esta en medio es la 2....
imageselect=2;

em=imageselect-2;



var lefttotal=[];

var leftinicial=0;


$( window ).load(function() {

  if(em>=0){
  leftinicial=$('#shop-demo article img').eq( em ).width();
  leftinicial=-(Math.floor(leftinicial/2));
  }else{
    leftinicial=0;
  }



var i=0;
var left=0;
$('#shop-demo article img').each(function(){
  //sumamos lo que miden todas las imágenes
    left+=$(this).width();
    lefttotal[i]=left;
    i++;


});



$('#shop-demo .wrapper').css({width:""+lefttotal[i]+""});
$('#shop-demo .wrapper').css({left:""+leftinicial+"px"});

});


var theForm = document.getElementById( 'theForm' );

      new stepsForm( theForm, {
        onSubmit : function( form ) {
          // hide form
          classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

          /*
          form.submit()
          or
          AJAX request (maybe show loading indicator while we don't have an answer..)
          */

          // let's just simulate something...
          var messageEl = theForm.querySelector( '.final-message' );
          messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
          classie.addClass( messageEl, 'show' );
        }
      } );



$('#shop-demo article img').click(function(){
  if($(this).data('image')==1){
    el=0;
  }else{

    if($(this).data('image')==4){
        el= -lefttotal[$(this).data('image')-2] + ($(window).width() - $(this).width());

        
    }else{
       el= -lefttotal[$(this).data('image')-2] + 100;
    }
  }
//tengo que saber el left de cada imagen...
    $('#shop-demo .wrapper').animate({left:""+el+""});
    imageselect=$(this).data('image');

});

  //animaciones
  new WOW().init();

  //efecto parallax
  $('#element').attr('data-stellar-ratio', 1.1);
  $.stellar();



  


  $(window).scroll(function(){

  	//segun distancia de scroll pone un filtro, podríamos hacer efecto parallax..
    st = $(window).scrollTop();



    if(st>500){
    	st=500;
    }

    $('#backgroundimage').css({"-webkit-filter": "blur("+Math.floor((st * .05)) + "px)" });


     /*$('#backgroundimage').css({"-webkit-filter": "grayscale("+st/500+""});*/




  });


}



