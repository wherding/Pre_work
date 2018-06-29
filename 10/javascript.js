//when grow button is clicked
$("#growbtn").on("click", function() {
   
    $("#box").addClass("grow"),
    // increase size 
    $(".grow").animate({height:"+=9.2px", width:"+=9.2px"},"fast");
})

$("#bluebtn").on("click", function(){
    $("#box").removeClass("original"),
    $("#box").addClass("blue"),
    $("#box").removeClass("original");
   // $(".blue").css("background-color","blue")
})

$("#resetbtn").on("click", function(){
    //remove style 
    /*
    $("#box").removeClass("blue");
    $("#box").removeClass("grow");
    
    $("#box").removeAttr("style");*/
    $("#box").removeAttr("style");
    $("#box").removeClass();
    $("#box").addClass("original");

})

$("#fadebtn").on("click", function () {
    $("#box").addClass("fade");
    $(".fade").animate({opacity:"-=0.25"},"fast");
    

    
})


/*document.getElementById("#box").onload = function(){
    myScript()
};*/

$(document).ready(function(){
    $("#box").addClass("original");
}) 
/*could make a new class 
#grow for grow btn. and remove classes*/