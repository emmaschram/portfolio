  $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

	       var target = this.hash;
	       var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	       }, 900, 'swing', function () {
	        window.location.hash = target;
	       });
	   });
            
            
   /*     $('#vanhikebutton').hide();
            $(".rightvan").mouseover(function(){
            $("#vanhikebutton").fadeIn(200);
        });
        $(".rightvan").mouseleave(function(){
        $("#vanhikebutton").fadeOut(100);
        });
            
        $('#pinebirchbutton').hide();
            $(".rightpine").mouseover(function(){
            $("#pinebirchbutton").fadeIn(200);
        });
        $(".rightpine").mouseleave(function(){
        $("#pinebirchbutton").fadeOut(100);
        });
            
        $('#eskbutton').hide();
            $(".rightesk").mouseover(function(){
            $("#eskbutton").fadeIn(200);
        });
        $(".rightesk").mouseleave(function(){
        $("#eskbutton").fadeOut(100);
        });
            
        $('#apresbutton').hide();
            $(".rightapres").mouseover(function(){
            $("#apresbutton").fadeIn(200);
        });
        $(".rightapres").mouseleave(function(){
        $("#apresbutton").fadeOut(100);
        });
            
        $('#staircasebutton').hide();
            $(".rightstair").mouseover(function(){
            $("#staircasebutton").fadeIn(200);
        });
        $(".rightstair").mouseleave(function(){
        $("#staircasebutton").fadeOut(100);
        });
            
        $('#photoshopbutton').hide();
            $(".rightphoto").mouseover(function(){
            $("#photoshopbutton").fadeIn(200);
        });
        $(".rightphoto").mouseleave(function(){
        $("#photoshopbutton").fadeOut(100);
        });
            
         $('#illustratorbutton').hide();
            $(".rightillu").mouseover(function(){
            $("#illustratorbutton").fadeIn(200);
        });
        $(".rightillu").mouseleave(function(){
        $("#illustratorbutton").fadeOut(100);
        }); */