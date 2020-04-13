$(function(){

            
            $("header nav>ul.gnb>li").mouseover(function(){
                $("ul.sub").stop().slideDown();
            });
            
            $("header nav>ul.gnb>li").mouseleave(function(){
                $("ul.sub").stop().slideUp();
            });
            
            $(".txt a").eq(0).click(function(){
                $(".modal").fadeIn();
            });
            
            $("button").click(function(){
                $(".modal").fadeOut();
            });
            
            
            
            
            var current = 0;

			function hanM(){
			move(current,"0","-100%");
			current++;
			if(current==3){
				current=0
			}
			move(current,"100%","0");
			}

			setInterval(hanM,3000);

			function move(index,start,end){

				$(".slide li").eq(index).css("top",start).stop().animate({top:end},3000);
			};
            
            $(".tab_menu>ul>li").click(function(){
                var liNum  = $(this).index();
                $(".tab_menu>ul>li").removeClass();
                $(".tab_menu>ul>li").removeClass("active01");
                $(".txt").removeClass("bg");
                $(".tab_menu>ul>li").eq(liNum).addClass("active01");
                $(".txt").addClass("bg");
                $(".txt>div").hide();
                $(".txt>div").eq(liNum).fadeIn();
                
                
            });
 
        });