function initMenuTab() {
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


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  console.log(accordionList)

  accordionList.forEach((index) => {
    index.addEventListener('click', (item) => {
      let targetDT = item.target;
      let targetDD = targetDT.nextElementSibling

      targetDD.classList.toggle('ativo')
    })
  })
}

initAccordion()
initMenuTab() 