document
    .querySelector('.container')
    .addEventListener('wheel', handleScroll())

document
  .querySelector('.slider')
  .addEventListener('wheel', handleScroll())

function handleScroll(scrollRate = 0.5) {
  return (e) => {
    const container = e.currentTarget
    const containerWidth = container.getBoundingClientRect().width

    const isReachedLeftEdge = container.scrollLeft === 0

    const isReachedRightEdge = container.scrollLeft === container.scrollWidth - containerWidth

    if (!isReachedLeftEdge && !isReachedRightEdge) {
      e.preventDefault()
      e.stopPropagation()
    }
    
    container.scrollLeft += e.deltaY * scrollRate
    container.scrollLeft += e.deltaX * scrollRate
  }
}
