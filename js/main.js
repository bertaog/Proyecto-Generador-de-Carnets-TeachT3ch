const carnet = document.querySelector("#carnet"),
  formulario = document.querySelector("#formularioCarnet"),
  nombre = document.querySelector("#carnet .nombre"),
  apellidos = document.querySelector("#carnet #apellidos"),
  miembro = document.querySelector("#carnet #tipoUsuario"),
  casa = document.querySelector("#carnet #escuelaUsuario"),
  escudo = document.querySelector("#carnet #escudoCasa"),
  leyenda = document.querySelector("#carnet #leyendaCasa"),
  foto = document.querySelector("#carnet #foto"),
  firma = document.querySelector("#carnet .firma p");

// * Creamos un alert, para cuando le das al No del index

document.getElementById("alerta").addEventListener("click", alerta);
function alerta() {
  alert("Qué pena que no quieras...Piénsalo y dale al si! ;P");
  return;
}

// * Damos la vuelta al carnet para mostrar el frente.
const mostrarFrente = () => {
  if (carnet.classList.contains("active")) {
    carnet.classList.remove("active");
  }
};

// * ROTACIÓN DEL CARNET
// Al hacer click pone la clase active a carnet y  con el toggle si no la  tiene, se la va a poner y si la tiene se la quita.
carnet.addEventListener("click", () => {
  carnet.classList.toggle("active"); //!!!!! OJOOOO NO FUNCIONA BIEN!!!!!
});

// * INPUT NOMBRE DE LA TARJETA
formulario.inputNombre.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputNombre.value = valorInput.replace(/[0-9]/g, ""); // si escribes numeros los borra
  nombre.textContent = valorInput;
  firma.textContent = valorInput;

  if (valorInput == "") {
    nombre.textContent = "Berta";
  }

  mostrarFrente();
});

// * INPUT APELLIDOS DE LA TARJETA
formulario.inputApellidos.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  formulario.inputApellidos.value = valorInput.replace(/[0-9]/g, ""); // si escribes numeros los borra
  apellidos.textContent = valorInput;

  if (valorInput == "") {
    apellidos.textContent = "Otero Garrido";
  }

  mostrarFrente();
});

// * TIPO DE MIEMBRO
formulario.selectMiembro.addEventListener("change", (e) => {
  //Muestra en tu carnet el tipo de miembro
  miembro.textContent = e.target.value;
  //Muestra una foto en el carnet
  const miembroCurso = e.target.value;
  if (miembroCurso == "Alumna") {
    foto.innerHTML = "";
    const imgFoto = document.createElement("img");
    imgFoto.src = "img/fotos/foto_chicaG.jpg";
    foto.appendChild(imgFoto);
  } else if (miembroCurso == "Alumno") {
    foto.innerHTML = "";
    const imgFoto = document.createElement("img");
    imgFoto.src = "img/fotos/foto_chicoG.jpg";
    foto.appendChild(imgFoto);
  } else if (miembroCurso == "Profesora") {
    foto.innerHTML = "";
    const imgFoto = document.createElement("img");
    imgFoto.src = "img/fotos/foto_profesora.jpg";
    foto.appendChild(imgFoto);
  } else if (miembroCurso == "Profesor") {
    foto.innerHTML = "";
    const imgFoto = document.createElement("img");
    imgFoto.src = "img/fotos/foto_profesor.jpg";
    foto.appendChild(imgFoto);
  } else if (miembroCurso == "Mentora") {
    foto.innerHTML = "";
    const imgFoto = document.createElement("img");
    imgFoto.src = "img/fotos/foto_mentora.jpg";
    foto.appendChild(imgFoto);
  } else if (miembroCurso == "Mentor") {
    foto.innerHTML = "";
    const imgFoto = document.createElement("img");
    imgFoto.src = "img/fotos/foto_mentora.jpg";
    foto.appendChild(imgFoto);
  }

  mostrarFrente();
});

// * CASA A LA QUE PERTENECE
formulario.selectCasa.addEventListener("change", (e) => {
  //En tu carnet se pinte el nombre de la casa
  casa.textContent = e.target.value;

  //En tu carnet se pinte el escudo de la casa
  const tuCasa = e.target.value;
  if (tuCasa == "Gryffindor") {
    // Si eliges Gryffindor
    escudo.innerHTML = ""; // borrar el escudo si te equivocas y rectificas
    const imgEscudo = document.createElement("img"); //En el document se crea un img
    imgEscudo.src = "img/Esc_Gryffindor.png"; //A ese img le damos una ruta
    escudo.appendChild(imgEscudo); //En el documento, dentro de escudo creamos un hijo que es la imgEscudo, se pinta en el carnet.
    leyenda.textContent =
      "Un@ Gryffindor tiene gran osadía y temple. Serás capaz de todo por defender en lo que crees y nunca te darás por vencid@."; // En carnet, en leyenda aparecerá este texto
  }
  // Si eliges Slytherin será igual que lo anterior, pero con distinto escudo y texto en la leyenda
  else if (tuCasa == "Slytherin") {
    escudo.innerHTML = "";
    const imgEscudo = document.createElement("img");
    imgEscudo.src = "img/Esc_Slytherin.png";
    leyenda.textContent =
      "Como miembro de Slytherin eres ambicios@, inteligente, muy astut@, piensas antes de actuar y tiendes a ser un líder fuerte.";
    escudo.appendChild(imgEscudo);
  }

  mostrarFrente();
});
