$(document).ready(function(){
    $("#overlay").hide();
    $("#overlay").hide();
    $("#ventana_borrar").hide();
    $("#ventana_cerrar").hide();

    $("#cerrar_sesion").click(function(){
        $("#overlay").show();
        $("#ventana_cerrar").show();
    });

    $("#no_cerrar").click(function(){
        $("#overlay").hide();
        $("#ventana_cerrar").hide();
    });

    $("#si_cerrar").click(function(e){
        e.preventDefault();
        window.open("inicio.html", "_self");
        return false;
    });
});
