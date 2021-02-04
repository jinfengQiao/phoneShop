$(function(){
    $(document).on("click",".headRigh",function(){
        // $('.popupBox').show();
        $('.popupBox').animate({width:'toggle'},350);
        $("body").css({"overflow":"hidden"});
        // event.stopPropagation();
    })

    
    // var display =$('.popupBox').css('display');
    // if(display == 'none'){
    //     // methods.endabledScroll();
    //     console.log('隐藏')
    // }
    // else{
    //     // methods.forbidScroll();
    //     console.log('显示')
    // }
    $(document).on("click",".popupBox",function(e){
    // $('.popupBox').click(function(e) {
        var popup = $('.popup')
        if(!popup.is(e.target) && popup.has(e.target).length === 0){ 	
            // $('.popupBox').hide(500);
            $('.popupBox').animate({width:'toggle'},350);
            $("body").css({"overflow":"auto"});
            event.stopPropagation();
        }
    })
});

// 弹出层点击跳转
function jumpIndex(){
    window.location.href="index.html";
}
function jumpFinPlan(){
    window.location.href="finPlan.html";
}
function jumpFlexible(){
    window.location.href="flexible.html";
}
// function jumpIndividual(){
//     window.location.href="individual.html";
// }
function jumpIndustry(){
    window.location.href="industry.html";
}
function jumpEnterQP(){
    window.location.href="enterQP.html";
}
function jumpRecruit(){
    window.location.href="recruit.html";
}
function jumpDaikai(){
    window.location.href="daikai.html";
}



//本地
localStorage.setItem('http', "http://of.kurohane.com/api/");
localStorage.setItem('http', "http://192.168.1.244/official/public/api/");
//正式
// localStorage.setItem('http', "https://of.tjqpjt.com/api/");

// 引入header头文件
$(".header").load('../header.html');
// 引入footer脚文件
$(".footer").load('../footer.html');

