function calcularPrecoJusto() {
  const vpa = parseFloat(document.getElementById("vpa").value);
  const lpa = parseFloat(document.getElementById("lpa").value);

  if (isNaN(vpa) || isNaN(lpa) || vpa <= 0 || lpa <= 0) {
    alert("Os valores do VPA e LPA devem ser números positivos maiores que zero.");
    return;
  }

  const multiplicadorGraham = 22.5;
  const precoJusto = Math.sqrt(multiplicadorGraham * vpa * lpa);

  document.getElementById("precoJusto").textContent = precoJusto.toFixed(2);
}
