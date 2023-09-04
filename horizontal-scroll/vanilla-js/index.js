document
    .querySelector('.container')
    .addEventListener('wheel', handleScroll())

document
  .querySelector('.slider')
  .addEventListener('wheel', handleScroll())

function handleScroll(scrollRate = 0.5) {
  return (e) => {
    e.preventDefault()

    const container = e.currentTarget

    const isReachedRight = container.scrollLeft === 0

    const isReachedLeft =
      container.scrollWidth - container.getBoundingClientRect().width === container.scrollLeft

    if (!isReachedRight && !isReachedLeft) e.stopPropagation()
    
    container.scrollLeft += e.deltaY * scrollRate
    container.scrollLeft += e.deltaX * scrollRate
  }
}
