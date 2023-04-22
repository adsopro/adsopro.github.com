/*let links = document.querySelectorAll("a");
links.forEach(function (link) {
  console.log(link);
});*/

let links = document.querySelectorAll(".close");
links.forEach(function (link) {
  //Agregar un evento click
  link.addEventListener("click", function (ev) {
    ev.preventDefault();
    let content = document.querySelector(".content");

    //Quitar las animaciones de la clase
    content.classList.remove("animate__bounceInDown");
    content.classList.remove("animate__animated");

    //Agregar animaciones de salida
    content.classList.add("animate__bounceOutDown");
    content.classList.add("animate__animated");

    setTimeout(function () {
      location.href = "../index.html";
    }, 1000);

    /* content.addEventListener("animationend", function () {
      location.href = "/index.html";
    });*/

    return false;
  });
});

/*let iconos = document.querySelectorAll("i");
iconos.forEach(function (icono) {
  icono.classList.remove("fa-star");
});*/
