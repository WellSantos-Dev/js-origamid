export default function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')

  accordionList.forEach((index) => {
    index.addEventListener('click', (item) => {
      let targetDT = item.target;
      let targetDD = targetDT.nextElementSibling

      targetDD.classList.toggle('ativo')
    })
  })
}
