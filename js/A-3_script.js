
$(function(){
    $("nav ul.gnb>li").mouseover(function(){
        $(this).find(".sub").stop().fadeIn();
    });
    $("nav ul.gnb>li").mouseleave(function(){
        $("ul.sub").stop().fadeOut();
    });

    var current =0;
    function slide(){
        move(current,"0","-100%");
        current++;
        if(current==3){current=0}
        move(current,"100%","0");
    }
    setInterval(slide,3000);
    function move(index,start,end){
        $(".slide li").eq(index).css("left",start).stop().animate({left:end},3000);
    }

    $(".notice_gal>ul>li").click(function(){
        var liNum = $(this).index(); $(".notice_gal>ul>li").removeClass("active"); $(".notice_gal>ul>li").eq(liNum).addClass("active");
        $(".txt ul").hide();
        $(".txt ul").stop().eq(liNum).fadeIn();
    });

    $(".notice>li").eq(0).click(function(){
        $(".modal").stop().fadeIn();
    });
    $("button").click(function(){
        $(".modal").stop().fadeOut();
    });
});