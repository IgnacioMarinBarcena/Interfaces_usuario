$(document).ready(function(){
    $("#españa").click(function(e){
        e.preventDefault();
        window.open("españa.html", "_self");
        return false;
    });
    $("#italia").click(function(e){
        e.preventDefault();
        window.open("italia.html", "_self");
        return false;
    });
    $("#inglaterra").click(function(e){
        e.preventDefault();
        window.open("inglaterra.html", "_self");
        return false;
    });
});