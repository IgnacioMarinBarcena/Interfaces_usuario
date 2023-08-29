 $(document).ready(function(){   
    $("#menu_perfil").hide();
    /* Mostramos el menu del perfil, funcional con mouse*/

    $("#menu").mouseenter(function(){
        $("#menu_perfil").show();
    });

    $("#menu").mouseleave(function(){
        $("#menu_perfil").hide();
    });

    $("#menu_perfil").mouseenter(function(){
        $("#menu_perfil").show();
    });

    $("#menu_perfil").mouseleave(function(){
        $("#menu_perfil").hide();
    });

    /* Mostramos el menu del perfil vompatible para tablets y moviles */

    $("#menu").click(function(){
        $("#menu_perfil").show();
    });

    $("body").click(function(){$("#menu_perfil").hide()});
});