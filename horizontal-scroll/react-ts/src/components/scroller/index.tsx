import styles from './index.module.css'

type Props = {
  children: React.ReactNode
  direction?: 'horizontal' | 'vertical'
  scrollRate?: number
  className?: string
}

export default function Scroller({
  children,
  direction = 'horizontal',
  scrollRate = 0.5,
  className = '',
}: Props) {
  function handleScroll(scrollRate: number) {
    return (e: React.WheelEvent) => {
      if (direction === 'vertical') return

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

  return (
    <div
      onWheel={handleScroll(scrollRate)}
      className={`
        hidden-scrollbar 
        ${styles.base} 
        ${direction === 'horizontal' ? styles.horizontal : styles.vertical} 
        ${className}
      `}
    >
      {children}
    </div>
  )
}
