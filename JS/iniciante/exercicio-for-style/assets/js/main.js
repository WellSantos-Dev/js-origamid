const paragrafos = document.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body)
const bodyColor = bodyStyle.backgroundColor;

// for(let i of paragrafos) {
//   i.style.backgroundColor = bodyColor
//   i.style.color = 'white'
// }

for(let i = 0; i < paragrafos.length; i++) {
  paragrafos[i].style.backgroundColor = bodyColor
  paragrafos[i].style.color = 'white'
}