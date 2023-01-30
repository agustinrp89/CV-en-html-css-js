
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let element = document.getElementById('nombre')
    element.innerHTML = data.results[0].name.title +"."+data.results[0].name.first +" " +data.results[0].name.last 
    
    let element2 = document.getElementById('fotoPerfil')
    element2.innerHTML = "<img class='moverfoto' src='" + data.results[0].picture.large + "' />"
   
    let nacimiento = document.getElementById('Nacimiento');
    let fechaNacimiento = new Date(data.results[0].dob.date);
    nacimiento.innerHTML = "<b>Fecha de nacimiento:</b> " + fechaNacimiento.toLocaleDateString();

    let domicilio = document.getElementById('Domicilio')
    domicilio.innerHTML ="<b>Domicilio:</b> " + data.results[0].location.city + ", "+ data.results[0].location.street.name + " " + data.results[0].location.street.number

    let contacto = document.getElementById('Contacto')
    contacto.innerHTML ="<b>Celular:</b> " + data.results[0].cell

    let email = document.getElementById('Email')
    email.innerHTML ="<b>Email:</b> " + "<a href='#'> " + data.results[0].email + "<a/>"

    console.log(data)
  })
 .catch(err => console.log(err))



 const buttons = document.querySelectorAll('.botones');

 for (const button of buttons) {
   button.addEventListener('click', function() {
     const submenu = document.querySelector(`#${this.id} + ul`);
     submenu.classList.toggle('active');
   });
 }




 var classNames = ["fade-item", "fade-item2", "fade-item3", "fade-item4"];

classNames.forEach(className => {
  var items = document.getElementsByClassName(className);
  for (let i = 0; i < items.length; ++i) {
    fadeIn(items[i], i * 1000);
  }
});

function fadeIn(item, delay) {
  setTimeout(() => {
    item.classList.add("fadein");
  }, delay);
}