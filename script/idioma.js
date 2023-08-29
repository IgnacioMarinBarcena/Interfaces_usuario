
/**Inico*/
inicioEspañol = ["INICIAR SESIÓN", "REGISTRARSE", "REGISTRATE AQUI"]
inicioIngles = ["LOG IN", "SIGN IN", "SIGN IN HERE"]


/*Navegador*/
navEspañol = ["MENU", "INICIO", "BIBLIOTECA", "OPCIONES"]
navIngles = ["MENU", "HOME", "LIBRARY", "OPTIONS"]

/*index*/
indexEspañol = ["NOVEDADES", "ESCUCHADAS RECIENTEMENTE", "RECOMENDACIONES", "PODCASTS"]
indexIngles = ["NEWS", "RECENTLY LISTENED", "RECOMMENDED SONGS", "PODCASTS"]

/*Biblioteca*/
bibliotecaEspañol = ["MIS LISTAS", "MIS ARTISTAS FAVORITOS", "MIS ÁLBUMES", "MIS PODCASTS"]
bibliotecaIngles = ["MY LISTS", "MY FAVOURITE ARTISTS", "MY ALBUMS", "MY PODCASTS"]

/*Opciones*/
opcionesEspañol = ["AUTOPLAY: Reproducir automaticamente las canciones similares cuando se acabe las canciones de una lista.","MODO SIN CONEXIÓN: Escuchar música cuando no esta conectado a la red.","CAMBIAR IDIOMA","SOBRE NOSOTROS","POLITICA DE COOKIES","POLITICA DE PRIVACIDAD","SONIDO ESTÉREO: Escuchar música con calidad de sonido estéreo","NORMALIZAR VOLUMEN: Igualar el volumen de todas las canciones","DESCARGA AUTOMÁTICA","MODO OSCURO/CLARO","AYUDA","CERRAR SESIÓN"]
opcionesIngles = ["AUTOPLAY: Automatically reproduce similar songs when the songs of a list finishes.","WITHOUT CONEXION MODE: Listen to music when not conected to the network.","CHANGE LANGUAJE","ABOUT US","COOKIES POLICY","PRIVACY POLICY","STEREO SOUND: Listen to music with stereo sound quality","NORMALIZE VOLUME: Equals all songs volume","AUTOMATIC DOWNLOAD","DARK/LIGHT MODE","HELP","CLOSE SESSION"]

/*Cerrar Sesion*/
cerrarSEspañol = ["¿Estas seguro de que quieres cerrar sesión?", "SI", "NO"]
cerrarSIngles = ["Are you sure you want to log out?", "YES", "NO"]

/*Perfil Usuario*/
perfilUEspañol = ["CAMBIAR CAMPOS", "ARTISTAS SEGUIDOS"]
perfilUIngles = ["CHANGE FIELDS", "FOLLOWED ARTISTS"]

/*Cambiar Campos*/
cambiarCEspañol = ["GUARDAR", "CAMBIAR NOMBRE", "CORREO ELECTRÓNICO", "CAMBIAR EMAIL", "CONTRASEÑA", "CAMBIAR CONTRASEÑA", "FECHA NACIMIENTO", "CAMBIAR FECHA NACIMIENTO"]
cambiarCIngles = ["SAVE", "CHANGE NAME", "EMAIL", "CHANGE EMAIL", "PASSWORD", "CHANGE PASSWORD", "BIRTHDATE", "CHANGE BIRTHDATE"] 

/*Extras*/
extrasEspañol = ["NOTICIAS", "Ganadores de la edicion", "DANI MARTÍN DEJA LA MÚSICA POR UN TIEMPO", "Su último concierto", "TIENDA", "Camiseta baquetas batería", "Sudadera piano mujer", "Camsieta guitarra", "Taza musical", "Poster pared metal"]
extrasIngles = ["NEWS", "Edition winners", "DANI MARTÍN LEAVES MUSIC FOR A TIME", "His last concert", "SHOP", "Drumsticks T-shirt", "Woman piano sweatshirt", "Guitar T-Shirt", "Musical cup", "Wall metal poster"] 

/*Sobre Nosotros*/
sobrenosotrosEspañol = ["QUIENES SOMOS","Somos 4 amigos que decidieron crear una aplicación de música gratuita al alcance de todos y sin ningún coste para los usuarios. Tenemos la filosofía de hacer disfrutar a todo el mundo y que pasen una experiencia de calidad por medio de dar un servicio de música de calidad."]
sobrenosotrosIngles = ["WHO WE ARE", "We are 4 friends who decided to make a free music app reachable for everyone and without any costs for users. We have the philosophy for making everyone enjoy and giving them a quality sound experience."]

/*Log in*/
loginEspañol = ["INICIAR SESION", "REGISTRARSE", "Nombre de Usuario"]
loginIngles = ["LOG IN", "SIG IN", "USER NAME"]

/*Artistas*/
artistaEspañol = ["SEGUIR", "DISCOGRAFIA"]
artistaIngles = ["FOLLOW", "DISCOGRAFY"]

$(document).ready(function(){
    idioma = sessionStorage.getItem("idioma")

    if (idioma=="español" || idioma==null){
        /*inicio*/
        $("#login").html(inicioEspañol[0]);
        $("#sigin").html(inicioEspañol[1]);
        $("#signinhere").html(inicioEspañol[2]);
        /*navegador*/
        $("#menu_element").html(navEspañol[0]);
        $("#inicio_element").html(navEspañol[1]);
        $("#biblioteca_element").html(navEspañol[2]);
        $("#opciones_element").html(navEspañol[3]);
        /*index*/
        $("#novedades_element").html(indexEspañol[0]);
        $("#escuchadasrecientemente_element").html(indexEspañol[1]);
        $("#masescuchadas_element").html(indexEspañol[2]);
        $("#podcast_element").html(indexEspañol[3]);
        /*Biblioteca*/
        $("#mislistas_element").html(bibliotecaEspañol[0]);
        $("#misartistas_element").html(bibliotecaEspañol[1]);
        $("#misalbumes_element").html(bibliotecaEspañol[2]);
        $("#mispodcast_element").html(bibliotecaEspañol[3]);
        /*Opciones*/
        $("#autoplay_element").html(opcionesEspañol[0]);
        $("#conexion_element").html(opcionesEspañol[1]);
        $("#idioma_element").html(opcionesEspañol[2]);
        $("#nosotros_element").html(opcionesEspañol[3]);
        $("#cookies_element").html(opcionesEspañol[4]);
        $("#privacidad_element").html(opcionesEspañol[5]);
        $("#sonido_element").html(opcionesEspañol[6]);
        $("#volumen_element").html(opcionesEspañol[7]);
        $("#descarga_element").html(opcionesEspañol[8]);
        $("#modo_element").html(opcionesEspañol[9]);
        $("#ayuda_element").html(opcionesEspañol[10]);
        $("#cerrar_element").html(opcionesEspañol[11]);
        /*Cerrar Sesion*/
        $("#sesion_element").html(cerrarSEspañol[0]);
        $("#si_cerrar").html(cerrarSEspañol[1]);
        $("#no_cerrar").html(cerrarSEspañol[2]);
        /*Perfil Usuario*/
        $("#cambiar_campos").html(perfilUEspañol[0]);
        $("#artistasseguidos_element").html(perfilUEspañol[1]);
        /*Cambiar Campos*/
        $(".boton_guardar").html(cambiarCEspañol[0]);
        $("#cambiar_name").html(cambiarCEspañol[1]);
        $("#email_element").html(cambiarCEspañol[2]);
        $("#cambiar_email").html(cambiarCEspañol[3]);
        $("#password_element").html(cambiarCEspañol[4]);
        $("#cambiar_password").html(cambiarCEspañol[5]);
        $("#date_element").html(cambiarCEspañol[6]);
        $("#cambiar_date").html(cambiarCEspañol[7]);
        /*Extras*/
        $("#noticias_element").html(extrasEspañol[0]);
        $("#ganadores_element").html(extrasEspañol[1]);
        $("#noticia1_element").html(extrasEspañol[2]);
        $("#ultimo_concierto").html(extrasEspañol[3]);
        $("#tienda_element").html(extrasEspañol[4]);
        $("#element1").html(extrasEspañol[5]);
        $("#element2").html(extrasEspañol[6]);
        $("#element3").html(extrasEspañol[7]);
        $("#element4").html(extrasEspañol[8]);
        $("#element5").html(extrasEspañol[9]);
        /*Sobrenosotros*/
        $("#somos_element").html(sobrenosotrosEspañol[0]);
        $("#texto_nosotros").html(sobrenosotrosEspañol[1]);
        /*Login*/
        $("#login").html(loginEspañol[0]);
        $("#sigin_element").html(loginEspañol[1]);
        $("#name_element").html(loginEspañol[2]);
        /*Artista*/
        $("#seguir").html(artistaEspañol[0]);
        $("#discografia").html(artistaEspañol[1]);

    }else if (idioma=="ingles"){
        /*inicio*/
        $("#login").html(inicioIngles[0]);
        $("#sigin").html(inicioIngles[1]);
        $("#signinhere").html(inicioIngles[2]);
        /*navegador*/
        $("#menu_element").html(navIngles[0]);
        $("#inicio_element").html(navIngles[1]);
        $("#biblioteca_element").html(navIngles[2]);
        $("#opciones_element").html(navIngles[3]);
        /*index*/
        $("#novedades_element").html(indexIngles[0]);
        $("#escuchadasrecientemente_element").html(indexIngles[1]);
        $("#masescuchadas_element").html(indexIngles[2]);
        $("#podcast_element").html(indexIngles[3]);
        /*Biblioteca*/
        $("#mislistas_element").html(bibliotecaIngles[0]);
        $("#misartistas_element").html(bibliotecaIngles[1]);
        $("#misalbumes_element").html(bibliotecaIngles[2]);
        $("#mispodcast_element").html(bibliotecaIngles[3]);
        /*Opciones*/
        $("#autoplay_element").html(opcionesIngles[0]);
        $("#conexion_element").html(opcionesIngles[1]);
        $("#idioma_element").html(opcionesIngles[2]);
        $("#nosotros_element").html(opcionesIngles[3]);
        $("#cookies_element").html(opcionesIngles[4]);
        $("#privacidad_element").html(opcionesIngles[5]);
        $("#sonido_element").html(opcionesIngles[6]);
        $("#volumen_element").html(opcionesIngles[7]);
        $("#descarga_element").html(opcionesIngles[8]);
        $("#modo_element").html(opcionesIngles[9]);
        $("#ayuda_element").html(opcionesIngles[10]);
        $("#cerrar_element").html(opcionesIngles[11]);
        /*Perfil Usuario*/
        $("#cambiar_campos").html(perfilUIngles[0]);
        $("#artistasseguidos_element").html(perfilUIngles[1]);
        /*Cambiar Campos*/
        $(".boton_guardar").html(cambiarCIngles[0]);
        $("#cambiar_name").html(cambiarCIngles[1]);
        $("#email_element").html(cambiarCIngles[2]);
        $("#cambiar_email").html(cambiarCIngles[3]);
        $("#password_element").html(cambiarCIngles[4]);
        $("#cambiar_password").html(cambiarCIngles[5]);
        $("#date_element").html(cambiarCIngles[6]);
        $("#cambiar_date").html(cambiarCIngles[7]);
        /*Cerrar Sesion*/
        $("#sesion_element").html(cerrarSIngles[0]);
        $("#si_cerrar").html(cerrarSIngles[1]);
        $("#no_cerrar").html(cerrarSIngles[2]);
        /*Extras*/
        $("#noticias_element").html(extrasIngles[0]);
        $("#ganadores_element").html(extrasIngles[1]);
        $("#noticia1_element").html(extrasIngles[2]);
        $("#ultimo_concierto").html(extrasIngles[3]);
        $("#tienda_element").html(extrasIngles[4]);
        $("#element1").html(extrasIngles[5]);
        $("#element2").html(extrasIngles[6]);
        $("#element3").html(extrasIngles[7]);
        $("#element4").html(extrasIngles[8]);
        $("#element5").html(extrasIngles[9]);
        /*Sobrenosotros*/
        $("#somos_element").html(sobrenosotrosIngles[0]);
        $("#texto_nosotros").html(sobrenosotrosIngles[1]);
        /*Login*/
        $("#login").html(loginIngles[0]);
        $("#sigin_element").html(loginIngles[1]);
        $("#name_element").html(loginIngles[2]);
        /*Artista*/
        $("#seguir").html(artistaIngles[0]);
        $("#discografia").html(artistaIngles[1]);
    }

    $("#cambiar_idioma").click(function(){
        if (idioma=="español" || idioma==null){
            sessionStorage.setItem("idioma", "ingles");
        }else if (idioma=="ingles"){
            sessionStorage.setItem("idioma", "español");
        };
        location.reload();
    });
});