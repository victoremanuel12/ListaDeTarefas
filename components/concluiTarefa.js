
const botaoConcluir = () => {
  const botaoConcluir = document.createElement("button")
  botaoConcluir.classList.add("check-button")
  botaoConcluir.innerText = "concluir"
  botaoConcluir.addEventListener("click", tarefaConcluida)
  return botaoConcluir
}
const tarefaConcluida = (evento) => {
  const botaoConcluir = evento.target
  const tarefaCompleta = botaoConcluir.parentElement
  tarefaCompleta.classList.toggle("done")

}
export default botaoConcluir