$(function(){
            var current =0;
            function slide(){
                move(current,"0","-100%");
                current++;
                if(current==3){current=0}
                move(current,"100%","0");
            }
            setInterval(slide,3000);
            
            function move(index,start,end){
                $(".slide li").eq(index).css("left",start).stop().animate({left:end},3000)
            }
            
            $(".gnb>li").mouseenter(function(){
                $(".navbg,ul.sub").stop().slideDown();
            });
            $(".gnb>li").mouseleave(function(){
                $(".navbg,ul.sub").stop().slideUp();
            });
            
            $(".notice>ul>li").eq(0).click(function(){
                $(".modal").stop().fadeIn();
            });
            $("button").click(function(){
                $(".modal").stop().fadeOut();
            });
            
            $("p").click(function(){
                $(this).toggleClass("on");
                $("footer .fam ul").stop().slideToggle();
            });
        });