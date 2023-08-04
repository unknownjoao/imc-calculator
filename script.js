const calcularImc = () => {
  const alturaMetros = parseFloat(document.imcForm.elements["altura"].value);
  const peso = parseFloat(document.imcForm.elements["peso"].value);
  const resultadoElemento = document.getElementById("resultado");
  const imc = peso / (alturaMetros * alturaMetros);

  let resultadoTexto = "";

  if (imc < 18.5) {
    resultadoTexto = "Abaixo do peso";
    resultadoElemento.style.color = "red";
  } else if (imc >= 18.5 && imc < 25) {
    resultadoTexto = "Peso normal";
    resultadoElemento.style.color = "green";
  } else if (imc >= 24.9 && imc < 29.9) {
    resultadoTexto = "Sobrepeso";
    resultadoElemento.style.color = "orange";
  } else if (imc >= 29.9 && imc < 39.9) {
    resultadoTexto = "Obesidade";
    resultadoElemento.style.color = "blue";
  } else {
    resultadoTexto = "Obesidade grave";
    resultadoElemento.style.color = "purple";
  }

  resultadoElemento.textContent =
    "Seu IMC é: " + imc.toFixed(2) + " - " + resultadoTexto;

  // Exibir o modal (popout) com o resultado
  const modal = document.getElementById("modal");
  modal.classList.add("active");
};

const fecharModal = () => {
  // Fechar o modal (popout)
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
};
