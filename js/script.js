const data = new Date();
const labelData = document.querySelectorAll('p');
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

const diaAtual = data.getDate();
const mesAtualFormatado = (data.getMonth() < 9) ? `0${data.getMonth() + 1}` : `${data.getMonth() + 1}`;
const anoAtual = data.getFullYear();

function dataAleatoria(){
  let diaAleatorio = Math.floor( (Math.random() * 31) + 1 );
  let mesAleatorio = Math.floor( (Math.random() * 12) + 1 );
  let anoAleatorio = Math.floor( (Math.random() * 300) + 1900 );

  if(diaAleatorio > 29 && mesAleatorio === 2 ) {
    mesAleatorio++;
  }

  labelData[0].innerHTML = `${ (diaAleatorio < 10) ? `0${diaAleatorio}` : diaAleatorio}`;
  labelData[1].innerHTML = `${ (mesAleatorio < 10) ? `0${mesAleatorio}` : mesAleatorio}`;
  labelData[2].innerHTML = anoAleatorio;

  const dataAleatoria = new Date(`${anoAleatorio}/${mesAleatorio}/${diaAleatorio}`);

  labelData[3].innerHTML = dataAleatoria.toLocaleDateString('pt-br', options);
}

function resetarData() {
  labelData[0].innerHTML = diaAtual;
  labelData[1].innerHTML = mesAtualFormatado;
  labelData[2].innerHTML = anoAtual;

  labelData[3].style.backgroundColor = "#fff";
  labelData[3].innerHTML = data.toLocaleDateString('pt-br', options);
}
