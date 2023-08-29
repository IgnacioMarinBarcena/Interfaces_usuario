
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
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


//funciona
function checkCookie_login(e) {
  let u_nameL = document.getElementById("u_nameL");
  let p_wordL = document.getElementById("p_wordL");
  let userL = getCookie(u_nameL.value + "_username");
  let pswordL = getCookie(u_nameL.value + "_password");
  if (userL == u_nameL.value && pswordL == p_wordL.value) {
    alert("Welcome again " + u_nameL.value);
    sessionStorage.setItem("u_name", u_nameL.value);
    e.preventDefault();
    window.open("index.html", "_self");
    return false;
    /*window.location.href="Sesion_abierta.html"*/
  } 
  else {
    alert("Usuario o contraseña incorrecto");
  }
  }


//funciona
function checkCookie_signin(e) {
  let u_nameS = document.getElementById("u_nameS");
  let p_wordS = document.getElementById("p_wordS");
  let name = document.getElementById("name");
  let b_date = document.getElementById("b_date");

  let userS = getCookie(u_nameS.value + "_username");
  let nameS = getCookie(u_nameS.value + "_email");
  if (userS == u_nameS.value || nameS == name.value) {
    alert("Esta cuenta ya existe.\nInicia Sesión " + u_nameS.value);
  } 
  else {
    setCookie(u_nameS.value + "_username", u_nameS.value, 30);
    setCookie(u_nameS.value + "_password", p_wordS.value, 30);
    setCookie(u_nameS.value + "_date", b_date.value, 30);
    setCookie(u_nameS.value + "_name", name.value, 30);
    alert("Te has registrado correctamente. \nInicia Sesión " + u_nameS.value);
  }
  e.preventDefault();
  window.open("inicio.html", "_self");
  return false;
};

$(document).ready(function(){

  $(".boton_guardar").click(function(){
      if ($(this).attr("id") == "boton_name"){
          modifyCookie("_name", $("#name_input").val());
      };
      if ($(this).attr("id") == "boton_email"){
          modifyCookie_email($("#email_input").val());
      };
      if ($(this).attr("id") == "boton_password"){
          modifyCookie("_password", $("#password_input").val());
      };
      if ($(this).attr("id") == "boton_date"){
          modifyCookie("_date", $("#date_input").val());
      };
  });

});


function modifyCookie(campo, valor){
  u_name = sessionStorage.getItem("u_name");
  if (valor != "") {
    setCookie(u_name + campo, valor, 30)};
    location.reload();
};

function modifyCookie_email(valor){
  u_name = sessionStorage.getItem("u_name");
  uname = getCookie(u_name + "_name");
  email = getCookie(u_name + "_username")
  password = getCookie(u_name + "_password");
  date = getCookie(u_name + "_date");
  
  if (valor != "") {
    sessionStorage.setItem("u_name", valor);
    setCookie(valor + "_username", valor, 30);
    setCookie(valor + "_name", uname, 30);
    setCookie(valor + "_password", password, 30);
    setCookie(valor + "_date", date, 30);

    setCookie(u_name + "_username", email, -1);
    setCookie(u_name + "_name", uname, -1);
    setCookie(u_name + "_password", password, -1);
    setCookie(u_name + "_date", date, -1);
  };
  location.reload();
};
