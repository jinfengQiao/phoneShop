$(function(){
    $('.realCont1 ul li').click(function(){
        $(this).addClass('realCont1Add').siblings().removeClass('realCont1Add');
    });
    $('.realCont1 ul li:first-child').click(function(){
        $('.realCont2 ul li:first-child').show().siblings().hide();
    });
    $('.realCont1 ul li:nth-child(2)').click(function(){
        $('.realCont2 ul li:nth-child(2)').show().siblings().hide();
    });
    $('.realCont1 ul li:last-child').click(function(){
        $('.realCont2 ul li:last-child').show().siblings().hide();
    });
});