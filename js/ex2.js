$(function(){
    $("nav>ul.gnb>li").mouseover(function(){
        $("ul.sub").stop().slideDown();
        $("header .navbg").stop().slideDown();
    });
    $("nav>ul.gnb>li").mouseleave(function(){
        $("ul.sub").stop().slideUp();
        $("header .navbg").stop().slideUp();
    });
    
    var current = 0;
    function slide(){
        move(current,"0","-100%");
        current++;
        if(current==3){current=0}
        move(current,"100%","0");
    }
    setInterval(slide,3000);
    function move(index,start,end){
        $(".slide li").eq(index).css("left",start).stop().animate({left:end},1000);
    }
});