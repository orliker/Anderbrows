import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

/**
 * Reveal children when section enters viewport.
 * Targets elements with `.reveal-init` inside the ref.
 */
export function useReveal({
  selector = '.reveal-init',
  delayBetween = 90,
  duration = 900,
  threshold = 0.12,
  y = 28,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = root.querySelectorAll(selector)
    if (!items.length) return

    // Pre-hide items immediately so no flash before animation
    items.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = `translateY(${y}px)`
    })

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

/**
 * Float animation — continuous gentle up/down movement.
 * Pass ref and it will start floating.
 */
export function useFloat(amplitude = 8, duration = 4000) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctrl = animate(el, {
      translateY: [0, -amplitude],
      duration,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    })
    return () => ctrl.pause?.()
  }, [amplitude, duration])
  return ref
}
