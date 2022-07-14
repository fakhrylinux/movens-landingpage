function next () {
  const slider = document.querySelector('.slider')
  let leftVal = parseInt(slider.style.left)
  if (leftVal >= -570) {
    let styleLeft = leftVal + -190
    slider.style.left = `${styleLeft}px`
  }

  console.log(`${leftVal}`)
}

function previous () {
  const slider = document.querySelector('.slider')
  let leftVal = parseInt(slider.style.left)
  if (leftVal <= -190) {
    let styleLeft = leftVal + 190
    slider.style.left = `${styleLeft}px`
  }

  console.log(`${leftVal}`)
}

document.querySelector('.right').addEventListener('click', next)
document.querySelector('.left').addEventListener('click', previous)

