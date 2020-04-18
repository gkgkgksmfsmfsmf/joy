$(function(){
    $("nav>ul.gnb>li").mouseover(function(){
        $("ul.sub").stop().slideDown();
        $(".navbg").stop().slideDown();
    });
    $("nav>ul.gnb>li").mouseout(function(){
        $("ul.sub").stop().slideUp();
        $(".navbg").stop().slideUp();
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
    
    $(".notice>ul>li").click(function(){
        var liNum = $(this).index();
        $(".notice>ul>li").removeClass();
        $(".notice>ul>li").eq(liNum).addClass("active");
        $(".txt").addClass("bg");
        $(".txt>ul").hide().eq(liNum).fadeIn();
    });
    
    $(".txt li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $("button").click(function(){
        $(".modal").fadeOut();
    });
    
    $(".fam p").click(function(){
        $(this).toggleClass("on");
        $(".fam ul").slideToggle();
    });
});