$(document).ready(function(){
    $("#barra_musica").hide();

    cancion_peque = sessionStorage.getItem("cancion_peque");
    if (cancion_peque!=null){
        elementos();
        $("#barra_musica").html('<audio controls autoplay><source src="images/'+cancion_peque+'.mp3" type="audio/mpeg"></audio>');
    };
  
    $(".play").click(function(e){
        e.preventDefault();
        window.open("cancion.html", "_self");
        sessionStorage.setItem("cancion", $(this).attr("id"));
    });
  
    $(".campob").click(function(){
        if ($(this).attr("id")==null){
            pass
        }else{
        elementos();
        $("#barra_musica").html('<audio controls autoplay><source src="images/'+$(this).attr("id")+'" type="audio/mpeg"></audio>');
        };
    });
  
    function elementos() {
      $("#barra_musica").show();
    };
  });
  