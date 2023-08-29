$(document).ready(function(){
    $("#photo_input").hide();
    $("#boton_photo").hide();
    $("#name_input").hide();
    $("#boton_name").hide();
    $("#email_input").hide();
    $("#boton_email").hide();
    $("#password_input").hide();
    $("#boton_password").hide();
    $("#date_input").hide();
    $("#boton_date").hide();

    u_name = sessionStorage.getItem("u_name");
    user_name = getCookie(u_name + "_name");
    email = getCookie(u_name + "_username");
    password = getCookie(u_name + "_password");
    date = getCookie(u_name + "_date");
    $("#user").html(user_name);
    $("#email").html(email);
    $("#password").html(password);
    $("#date").html(date);

    $("#cambiar_photo").click(function(){
        $("#photo_input").show();
        $("#boton_photo").show();
        $("#cambiar_photo").hide();
    });

    $("#cambiar_name").click(function(){
        $("#name_input").show();
        $("#boton_name").show();
        $("#cambiar_name").hide();
    });

    $("#cambiar_email").click(function(){
        $("#email_input").show();
        $("#boton_email").show();
        $("#cambiar_email").hide();
    });

    $("#cambiar_password").click(function(){
        $("#password_input").show();
        $("#boton_password").show();
        $("#cambiar_password").hide();
    });

    $("#cambiar_date").click(function(){
        $("#date_input").show();
        $("#boton_date").show();
        $("#cambiar_date").hide();
    });

});

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
  }