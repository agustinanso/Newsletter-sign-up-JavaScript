// Formulario
const formulario = document.querySelector("#formulario");

//Info Pagina principal
const sectionPrincipal = document.querySelectorAll("#sectionPrincipal");

//Info para transicion
const principal = document.getElementById("principal");
console.log(principal);

// Info transicion secundaria
const secundaria = document.getElementById("secundaria");

// input email
const email = document.querySelector("#email");

// submit
const submitt = document.querySelector("#submitt");

// dismiss
const dismiss = document.querySelector("#dismiss");

// Alertas
const alerta = document.querySelector("#alerta");
const valido = document.querySelector("#valido");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
  const dato = {
    correo: formulario.email.value,
  };
  if (!expresionRegular.test(dato.correo)) {
    alerta.classList.remove("hidden");
    return;
  } else {
    alerta.classList.add("hidden");
    valido.classList.remove("hidden");
    return;
  }
});

submitt.addEventListener("click", () => {
  const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
  const dato = {
    correo: formulario.email.value,
  };

  if (!expresionRegular.test(dato.correo)) {
    return;
  } else {
    principal.classList.add("hidden");
    secundaria.classList.remove("hidden");

    return;
  }
});

dismiss.addEventListener("click", () => {
  secundaria.classList.add("hidden");
  principal.classList.remove("absotule");
  principal.classList.remove("hidden");
});
