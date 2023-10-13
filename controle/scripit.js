const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
let minhaListaDeItens = []



const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = '0' + hr;

  if (min < 10) min = '0' + min;

  if (s < 10) s = '0' + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;

})






function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value, concluida: false,
  })

  input.value = ''

  mostrarTarefa()
}

function mostrarTarefa() {
  let novaLi = ''

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `
  <li class="task ${item.concluida && 'done'}">
            <img src="/estilo/img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="/estilo/img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
        </li>
  `
  })


  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao) {
  minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

  mostrarTarefa()


}

function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1)

  mostrarTarefa()
  item.parentNode.appendChild(item);
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem('lista')

  if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
  }

  mostrarTarefa()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)

document.addEventListener("keypress", function (e) {
  if (e.key === 'Enter') {

    var btn = document.querySelector(".button-add-task");

    btn.click();

  }
});
