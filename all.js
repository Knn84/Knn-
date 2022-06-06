$(".top").click(function(){
    $("html").animate({scrollTop:0},700);
});
$(".top-2").click(function(){
    $("html").animate({scrollTop:0},700);
});
$(".number").click (function(event){
    event.preventDefault();
    $(this).toggleClass("bg-blue");
    $(this).parent().siblings().find(".number").removeClass("bg-blue");

    newNumber = $(this).find(".people").text();
    $(".plan-people").text(newNumber);
    if(newNumber==">25000"){
        $(".cost").text("洽客服")
        $(".standard-cost").text("洽客服");
    }else{
        $(".cost").text(newNumber *0.06);
        $(".standard-cost").text(newNumber *0.16);
    }
});

$(".QA-title").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("blue")
    $(this).parent().siblings().find(".QA-title").removeClass("blue");

    $(this).toggleClass("plus").toggleClass("minus");
    $(this).parent().siblings().find(".QA-title").removeClass("minus").addClass("plus");

    $(this).siblings(".answer").slideToggle();
    $(this).parent().siblings().find(".answer").slideUp();
});
