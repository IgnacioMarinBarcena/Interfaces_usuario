$(document).ready(function(){
    modo = sessionStorage.getItem("color");
    if (modo=="oscuro" || modo==null){
        $(":root").css("--fondo", "var(--negro)");
        $(":root").css("--letras", "var(--blanco)");
        $(":root").css("--header", "var(--grisoscuro)");
        $(":root").css("--letrasH", "var(--blanco)");
        $(":root").css("--botones", "var(--grisclaro)");
        $("#boton_color").css("background-color","var(--grisclaro)");
    }
    else if (modo=="claro"){
        $(":root").css("--fondo", "var(--blanco)");
        $(":root").css("--letras", "var(--negro)");
        $(":root").css("--header", "var(--grisclaro)");
        $(":root").css("--letrasH", "var(--negro)");
        $(":root").css("--botones", "var(--blanco)");
        $("#boton_color").css("background-color","var(--verde)");
    }
    
    $("#modo_color").click(function(){
        modo = sessionStorage.getItem("color");
        if (modo=="oscuro" || modo==null){
        sessionStorage.setItem("color", "claro");
        }
        else if (modo=="claro"){
        sessionStorage.setItem("color", "oscuro");
        };
        location.reload();
    });
    

    volumen = sessionStorage.getItem("volumen");
    if (volumen == "blanco" || volumen == null){
        $("#boton_volumen").css("background-color","var(--grisclaro)");
    }else if (volumen == "verde"){
        $("#boton_volumen").css("background-color","var(--verde)");
    }
    $("#volumen_element").click(function(){
        if (volumen == "blanco" || volumen == null){
            sessionStorage.setItem("volumen", "verde");
        }else if (volumen == "verde"){
            sessionStorage.setItem("volumen", "blanco");
        }
        location.reload();
    });

    sonido = sessionStorage.getItem("sonido");
    if (sonido == "blanco" || sonido == null){
        $("#boton_sonido").css("background-color","var(--grisclaro)");
    }else if (sonido == "verde"){
        $("#boton_sonido").css("background-color","var(--verde)");
    }
    $("#sonido_element").click(function(){
        if (sonido == "blanco" || sonido == null){
            sessionStorage.setItem("sonido", "verde");
        }else if (sonido == "verde"){
            sessionStorage.setItem("sonido", "blanco");
        }
        location.reload();
    });

    conexion = sessionStorage.getItem("conexion");
    if (conexion == "blanco" || conexion == null){
        $("#boton_conexion").css("background-color","var(--grisclaro)");
    }else if (conexion == "verde"){
        $("#boton_conexion").css("background-color","var(--verde)");
    }
    $("#conexion_element").click(function(){
        if (conexion == "blanco" || conexion == null){
            sessionStorage.setItem("conexion", "verde");
        }else if (conexion == "verde"){
            sessionStorage.setItem("conexion", "blanco");
        }
        location.reload();
    });

    autoplay = sessionStorage.getItem("autoplay");
    if (autoplay == "blanco" || autoplay == null){
        $("#boton_autoplay").css("background-color","var(--grisclaro)");
    }else if (autoplay == "verde"){
        $("#boton_autoplay").css("background-color","var(--verde)");
    }
    $("#autoplay_element").click(function(){
        if (autoplay == "blanco" || autoplay == null){
            sessionStorage.setItem("autoplay", "verde");
        }else if (autoplay == "verde"){
            sessionStorage.setItem("autoplay", "blanco");
        }
        location.reload();
    });

    $(document).ready(function(){
        seguir = sessionStorage.getItem("seguir");
        if (seguir=="seguir" || seguir==null){
            $("#seguir").css('background', 'var(--naranja)')
        }else if (seguir=="seguido"){
            $("#seguir").css('background', 'var(--verde)')
        }
        $("#seguir").click(function(){
            if (seguir=="seguir" || seguir==null){
                sessionStorage.setItem("seguir", "seguido");
            }else if (seguir=="seguido"){
                sessionStorage.setItem("seguir", "seguir");
            }
            location.reload();
        });
        
    });

});



