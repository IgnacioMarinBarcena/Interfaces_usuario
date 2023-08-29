$(document).ready(function(){
    $("#inicio").click(function(e){
        e.preventDefault();
        window.open("index.html", "_self");
        return false;
    });

    $("#bt_extras").click(function(e){
        e.preventDefault();
        window.open("extras.html", "_self");
        return false;
    });

    $("#bt_mapa").click(function(e){
        e.preventDefault();
        window.open("mapamundi.html", "_self");
        return false;
    });

    $("#biblioteca").click(function(e){
        e.preventDefault();
        window.open("biblioteca.html", "_self");
        return false;
    });

    $("#opciones").click(function(e){
        e.preventDefault();
        window.open("opciones.html", "_self");
        return false;
    });


    $("#contenedor_Uphoto").click(function(e){
        e.preventDefault();
        window.open("perfil_usuario.html", "_self");
        return false;
    });


});