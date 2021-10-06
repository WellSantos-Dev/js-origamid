export default function initMenuTab() {
  const listaAnimais = document.querySelectorAll('.js-listaAnimais li')
  const listaContent = document.querySelectorAll('.js-listaContent section')
  listaContent[0].classList.add('ativo')

  function addClass(index) {


    listaContent.forEach((itemContent) => {
      itemContent.classList.remove('ativo')
    })

    listaContent[index].classList.toggle('ativo')
  }

  listaAnimais.forEach((item, index) => {
    item.addEventListener('click', () => {
      addClass(index)
    })
  })
}