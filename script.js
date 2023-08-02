const calcularImc = () => {
    const altura = document.imcForm.elements["altura"].value;
    const peso = document.imcForm.elements["peso"].value;

    const imc = peso / altura ** 2;

    let resultadoTexto = "";

    if (imc < 18.5) {
        resultadoTexto = "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 25) {
        resultadoTexto = "Peso normal";
      } else if (imc >= 24.9 && imc < 29.9) {
        resultadoTexto = "Sobrepeso";
      } else if (imc >= 29.9 && imc < 39.9) {
        resultadoTexto = "Obesidade";
      } else {
        resultadoTexto = "Obesidade grave";
      }

      const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = "Seu IMC é: " + imc.toFixed(2) + " - " + resultadoTexto;
}