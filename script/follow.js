$(document).ready(function(){
    seguir = sessionStorage.getItem("seguir")
    if (seguir=="seguir" || seguir==null){
        $("#sabina").hide();
    }else if (seguir=="seguido"){
        $("#sabina").show();
    }
});