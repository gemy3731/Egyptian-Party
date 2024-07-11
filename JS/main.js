let singer = $(".singerHead");
$(singer).on('click',function(e){
    $(singer).siblings().slideUp(1000)
    $(e.target).siblings().slideDown(1000)
})




let countDownDate = new Date("July 11, 2030 00:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".days").html("-"+days+"D");
    $(".hours").html(hours+"h");
    $(".minutes").html(minutes+"m");
    $(".seconds").html(seconds+"s");

    if (distance < 0) {
      $(".expiredMsg").removeClass("d-none").html("EXPIRED") ;
      $(".time").addClass("d-none") ;
    }
  }, 1000);


$(".openIcon").on("click",function(){

    $(".openIcon").fadeOut(0);
    $("#sideBar").animate({left : `0px`},1000)
});
$(".close").on("click",function(){
    $("#sideBar").animate({left : `-${$("#sideBar").innerWidth()}px`},1000)
    setTimeout(function(){
        $(".openIcon").fadeIn();
    },1000)
});


$("nav a[href ^= '#']").on("click",function(e){
    let selectedSection = $(e.target).attr("href");
    let sectionOffset = $(selectedSection).offset().top;
    $("html,body").animate({scrollTop : sectionOffset},1000);
});



let textArea = $("textarea");
$(textArea).on("input",function(){
    let textAreaLength = $(textArea).val().length;
    console.log(textAreaLength);
    if (textAreaLength <= 100) {
        $(".submitBtn").removeClass("disabled");
        $(".vaildeMsg").html(`<span class = "text-danger fw-bold">${100-textAreaLength}</span> Characyer Reamining`);
    }else{
        $(".vaildeMsg").html(`<span class="text-danger fw-medium">your available character finished</span>`);
        $(".submitBtn").addClass("disabled");
    }
});
