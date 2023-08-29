$(document).ready(function(){
    $(".audio").hide();


    $(".play").click(function(e){
        elementos();
        $("#barra_musica").html('<audio controls autoplay><source src="images/Cancion1.mp3" type="audio/mpeg"></audio>');
    });

    function elementos() {
        $(".audio").show();
      };
});