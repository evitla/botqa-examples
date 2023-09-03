document
    .querySelector('.container')
    .addEventListener('wheel', handleScroll())

document
  .querySelector('.slider')
  .addEventListener('wheel', handleScroll())

function handleScroll(scrollRate = 0.5) {
  return (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    const container = e.currentTarget
    container.scrollLeft += e.deltaY * scrollRate
    container.scrollLeft += e.deltaX * scrollRate
  }
}
