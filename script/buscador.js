
$(document).ready(function(){
    $(".item").hide();
    $('#myInput').keyup(function(){
        nombres = $('.campob');
        buscando = $(this).val().toLowerCase();
        item='';
        for( i = 0; i < nombres.length; i++ ){
            item = $(nombres[i]).html().toLowerCase();
            for( x = 0; x < item.length; x++ ){
                if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                    $(nombres[i]).parents('.item').show(); 
                }else{
                    $(nombres[i]).parents('.item').hide();
                }
            }
        }
    });

    $("header").click(function(){
        $(".item").hide();
    });
    $("main").click(function(){
        $(".item").hide();
    });
    $("footer").click(function(){
        $(".item").hide();
    });
});