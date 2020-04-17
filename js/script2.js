$(function(){
    $("nav>ul.gnb>li").mouseover(function(){
        $(this).find("ul.sub").stop().slideDown();
    });
     $("nav>ul.gnb>li").mouseleave(function(){
        $(this).find("ul.sub").stop().slideUp();
    });
    
    var current = 0;
    var start = 0;
    
    function slide(){
        move(current,"0","0");
        current++;
        start++;
        if(current==3){
            current=0;
            start=0;
        }
        move(current,"1","1")
    }
    
    setInterval(slide,3000);
    
    function move(index,start,end){
        $(".slide li").eq(index).css("z-index",start).stop().animate({opacity:end},1000)
    }
});