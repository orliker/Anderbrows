import { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'

/*
 * SAFETY-FIRST APPROACH:
 * - Content is visible by default (no opacity:0 in CSS without .js-anims class)
 * - We add .js-anims to <html> only when JS is running fine
 * - If IntersectionObserver is unavailable or blocked (WhatsApp browser, etc.)
 *   we immediately reveal all items — no content ever stays hidden
 * - All animation calls are wrapped in try/catch
 */

let jsAnimsAdded = false
function ensureJsAnims() {
  if (!jsAnimsAdded) {
    document.documentElement.classList.add('js-anims')
    jsAnimsAdded = true
  }
}

export function useReveal({
  selector = '.reveal-init',
  delayBetween = 90,
  duration = 900,
  threshold = 0.10,
  y = 24,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = Array.from(root.querySelectorAll(selector))
    if (!items.length) return

    // Fallback: if IO isn't supported or something goes wrong, reveal immediately
    function revealAll() {
      items.forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
    }

    // If IO not available, just show content
    if (typeof IntersectionObserver === 'undefined') {
      revealAll()
      return
    }

    try {
      // Mark JS as active — CSS will now apply the opacity:0 initial state
      ensureJsAnims()

      // Safety timeout: if observer never fires within 3s, reveal everything
      const safetyTimer = setTimeout(revealAll, 3000)

      let played = false
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || played) return
          played = true
          clearTimeout(safetyTimer)
          try {
            animate(items, {
              opacity: [0, 1],
              translateY: [y, 0],
              duration,
              easing: 'easeOutExpo',
              delay: stagger(delayBetween),
            })
          } catch (_) {
            revealAll()
          }
          io.disconnect()
        },
        { threshold, rootMargin: '0px 0px -40px 0px' }
      )
      io.observe(root)

      return () => {
        clearTimeout(safetyTimer)
        io.disconnect()
      }
    } catch (_) {
      // If anything fails, make content visible
      revealAll()
    }
  }, [selector, delayBetween, duration, threshold, y])

  return ref
}

/**
 * Count-up animation. Safe version with fallback.
 */
export function useCountUp(target, { duration = 1800, easing = 'easeOutExpo' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Show final value immediately as fallback
    el.textContent = target.toLocaleString('pt-PT')

    if (typeof IntersectionObserver === 'undefined') return

    try {
      const obj = { v: 0 }
      let played = false
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || played) return
          played = true
          try {
            animate(obj, {
              v: target,
              duration,
              easing,
              onUpdate: () => {
                el.textContent = Math.round(obj.v).toLocaleString('pt-PT')
              },
            })
          } catch (_) { /* value already shown */ }
          io.disconnect()
        },
        { threshold: 0.4 }
      )
      io.observe(el)
      return () => io.disconnect()
    } catch (_) { /* value already shown */ }
  }, [target, duration, easing])

  return ref
}

/**
 * Float animation — safe version.
 */
export function useFloat(amplitude = 8, duration = 4000) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    try {
      const ctrl = animate(el, {
        translateY: [0, -amplitude],
        duration,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
      })
      return () => ctrl.pause?.()
    } catch (_) { /* no float, no problem */ }
  }, [amplitude, duration])
  return ref
}
