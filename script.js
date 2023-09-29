const hora = document.getElementById("hora");
const dia = document.getElementById("dia");
const periodo = document.getElementById("midday");

function calcularHora() {
  let dataAtual = new Date();
  let horaAtual = dataAtual.getHours();
  let minutos = dataAtual.getMinutes();
  let segundos = dataAtual.getSeconds();

  let periodoDia;
  
  let diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];

  dia.textContent = diasDaSemana[dataAtual.getDay()];

  periodoDia = horaAtual >= 12 ? "PM" : "AM";

  if (horaAtual === 0) {
    horaAtual = 12;
  } else if (horaAtual > 12) {
    horaAtual = horaAtual - 12;
  }

  let horaStr = horaAtual < 10 ? "0" + horaAtual : horaAtual;
  let minutosStr = minutos < 10 ? "0" + minutos : minutos;
  let segundosStr = segundos < 10 ? "0" + segundos : segundos;

  hora.textContent = horaStr + ":" + minutosStr + ":" + segundosStr + " " + periodoDia;
}

calcularHora();

setInterval(calcularHora, 1000);
