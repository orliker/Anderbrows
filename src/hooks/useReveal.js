import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

/**
 * Reveal children of a section when it enters the viewport.
 * Targets elements with `.reveal-init` inside the ref.
 *
 * options:
 *  - selector: querySelector for items (default ".reveal-init")
 *  - delayBetween: ms between items (default 90)
 *  - duration: per-item duration (default 900)
 *  - threshold: IntersectionObserver threshold (default 0.18)
 *  - y: starting translateY (default 28)
 */
export function useReveal({
  selector = '.reveal-init',
  delayBetween = 90,
  duration = 900,
  threshold = 0.18,
  y = 28,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = root.querySelectorAll(selector)
    if (!items.length) return

    let played = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played) return
        played = true
        animate(items, {
          opacity: [0, 1],
          translateY: [y, 0],
          duration,
          easing: 'easeOutExpo',
          delay: stagger(delayBetween),
        })
        io.disconnect()
      },
      { threshold }
    )
    io.observe(root)
    return () => io.disconnect()
  }, [selector, delayBetween, duration, threshold, y])

  return ref
}

/**
 * Animated count-up triggered when element enters viewport.
 */
export function useCountUp(target, { duration = 1800, easing = 'easeOutExpo' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { v: 0 }
    let played = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played) return
        played = true
        animate(obj, {
          v: target,
          duration,
          easing,
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString('pt-PT')
          },
        })
        io.disconnect()
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration, easing])

  return ref
}
