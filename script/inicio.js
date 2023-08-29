$(document).ready(function(){

    $("#login").click(function(e){
        e.preventDefault();
        window.open("login.html", "_self");
        return false;
    })

    $(".signin").click(function(e){
        e.preventDefault();
        window.open("signin.html", "_self");
        return false;
    })

});