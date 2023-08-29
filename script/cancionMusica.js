$(document).ready(function(){
    sessionStorage.removeItem("cancion_peque")
    cancion = sessionStorage.getItem("cancion")
    $("#barra_musica").html('<audio controls autoplay><source src="images/'+cancion+'.mp3" type="audio/mpeg"></audio>');
    $("#img_cancion").html('<img class="img_cancion" src="images/'+cancion+'.jpg" alt="Cancion">');

    $("#cruz_cancion").click(function(e){
        sessionStorage.setItem("cancion_peque", cancion)
        e.preventDefault();
        window.open("index.html", "_self");
        return false;
    });
});