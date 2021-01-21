
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
         
            $('.scroll').css({
                "opacity" : "1",
                "pointer-events":"auto"
              
            });
        }
        else{
            $('.scroll').css({
                "opacity" : "0",
                "pointer-events":"none"
            }) ;
        }
    });

    $('.scroll').click(function(){
        
        $('html').animate({scrollTop:0},500);
    })
    

    $(".xoa11").click(function(){
        $(".menudangreponse").css({
            "opacity" : "0",
            "display":"none"
        })
        $(".khoixoa11").css({
            "opacity" : "0",
            "display":"none"
        })

        $(".menuba1").css({
            "opacity" : "1",
            "display":"block"
        })

        $(".khoixoa").addClass( "nguocdichuyenxoa" );

        $(".menu").addClass( "nguocdichuyen" );

       
    })
    $(".menuba1").click(function(){
       
        $(".menudangreponse").css({
            "opacity" : "1",
            "display" :"block"
            
        })
        $(".xoa11").css({
            "display" : "block",
            "opacity" : "1",
          
        })
        $(".menu").removeClass( "nguocdichuyen" );
        $(".khoixoa").removeClass( "nguocdichuyenxoa" );
  
        
    })
    
    $(".slidercd").mouseover(function(){
        $(" .slidercd .owl-prev").css("opacity", "1" , "display" , "block");  
        $(".slidercd .owl-next ").css("opacity", "1" , "display" , "block");
     

    })
    $(".slidercd").mouseout(function(){
        $(" .slidercd .owl-prev").css("opacity", "0" , "display" , "none");  
        $(".slidercd .owl-next ").css("opacity", "0" , "display" , "none");
     

    })

});

