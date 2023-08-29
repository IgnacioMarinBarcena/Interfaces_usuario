$(document).ready(function(){
    $("#overlay").hide();

    $("#cerrar_sesion").click(function(){
        $("#overlay").show();
    });

    $("#no_cerrar").click(function(){
        $("#overlay").hide();
    });

    $("#si_cerrar").click(function(e){
        e.preventDefault();
        window.open("inicio.html", "_self");
        return false;
    });


    $("#nosotros_element").click(function(e){
        e.preventDefault();
        window.open("aboutus.html", "_self");
        return false;
    });

    $("#cookies_element").click(function(e){
        e.preventDefault();
        window.open("politicacookies.html", "_self");
        return false;
    });

    $("#privacidad_element").click(function(e){
        e.preventDefault();
        window.open("politicaprivacidad.html", "_self");
        return false;
    });

    $("#ayuda_element").click(function(e){
        e.preventDefault();
        window.open("ayuda.html", "_self");
        return false;
    });
});
