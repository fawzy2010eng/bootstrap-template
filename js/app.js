$(document).ready(function(){
    $(".gearbox").click(function () {
        $(".control .color-option").fadeToggle(1000);
    });
    
    
    $(".control ul li").click(function(){
        $('link[href*="theme"]').attr("href",$(this).attr("data-value"));
//        alert()
//        alert($(this).attr("data-value"));
        
    })
    
})