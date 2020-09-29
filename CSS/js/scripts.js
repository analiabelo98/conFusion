/*
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
*/


$("#carouselButton").click(function(){
       if ($("#carouselButton").children("span").hasClass('fa-pause')) {
           $("#mycarousel").carousel('pause');
           $("#carouselButton").children("span").removeClass('fa-pause');
           $("#carouselButton").children("span").addClass('fa-play');
       }
       else if ($("#carouselButton").children("span").hasClass('fa-play')){
           $("#mycarousel").carousel('cycle');
           $("#carouselButton").children("span").removeClass('fa-play');
           $("#carouselButton").children("span").addClass('fa-pause');                    
       }
   });

$("#reservation").click(function(){
   $("#modalReservation").appendTo("body").modal('show'); 
      
  });

$("#loginButton").click(function(){
   $("#loginModal").appendTo("body").modal('show'); 
      
  });
