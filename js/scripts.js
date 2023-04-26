let boton = document.getElementById("correo-val");
let resultado = document.querySelector(".res");

boton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("correo").value;
  validarCorreo(email);
});

const validarCorreo = (correo) => {
  let expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let verificar = expReg.test(correo);
  if (verificar) {
    resultado.innerHTML = "Su correo es correcto";
  } else {
    resultado.innerHTML = "Por favor verifique su correo, ya que no es valido";
  }
};
