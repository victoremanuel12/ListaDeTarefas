
import botaoConcluir from '../components/concluiTarefa.js'
import botaoDeleta  from '../components/deletaTarefa.js'



  const novaTarefa = document.querySelector("[data-form-button]")

  const criarTarefa = (evento) => {
    evento.preventDefault()

    const textoInput = document.querySelector("[data-form-input]")
    const valorDoInput = textoInput.value
    const lista = document.querySelector("[data-list]")
    const tarefa = document.createElement("li")
    tarefa.classList.add("task")
    const conteudo = `<p class="content">${valorDoInput}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(botaoConcluir())
    tarefa.appendChild(botaoDeleta())
    lista.appendChild(tarefa)
    textoInput.value = "";
  }
  novaTarefa.addEventListener("click", criarTarefa)