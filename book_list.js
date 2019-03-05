$(document).ready(function( evt ){
    $("#categories h2").click(function(){
        $(this).toggleClass("minus");
        if($(this).attr("class") != "minus"){
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }
        $("#image").attr("src", "");
    }); //end click
    
    $("#trc a, #hp a, #fantasy a").each(function(){
        var imgURL = $(this).attr("href");
        var bookIMG = new Image();
        bookIMG.src = imgURL;
        
        $(this).click(function(evt){
            $("#image").attr("src", imgURL);
            evt.preventDefault();
        }); //end click 
    });
});