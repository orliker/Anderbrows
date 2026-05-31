import { useEffect, useRef } from 'react'

export function useReveal({
  selector = '.reveal-init',
  delayBetween = 70,
  threshold = 0.12,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = [...root.querySelectorAll(selector)]
    if (!items.length) return

    items.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${index * delayBetween}ms`)
    })

    let io
    const reveal = () => {
      root.classList.add('is-revealed')
      window.removeEventListener('scroll', revealIfReached)
      if (io) io.disconnect()
    }

    const revealIfReached = () => {
      const rect = root.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92) reveal()
    }

    io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        reveal()
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    io.observe(root)
    requestAnimationFrame(revealIfReached)
    window.addEventListener('scroll', revealIfReached, { passive: true })

    return () => {
      window.removeEventListener('scroll', revealIfReached)
      io.disconnect()
    }
  }, [selector, delayBetween, threshold])

  return ref
}

export function useCountUp(target, { duration = 1200 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    let played = false
    const wrapper = el.closest('.number-accent')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const formattedTarget = target.toLocaleString('pt-PT')

    const finish = () => {
      el.textContent = formattedTarget
      el.classList.remove('is-counting')
      el.classList.add('is-counted')
      wrapper?.classList.remove('is-counting')
      wrapper?.classList.add('is-counted')
    }

    if (reducedMotion) {
      finish()
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played) return
        played = true
        el.classList.add('is-counting')
        wrapper?.classList.add('is-counting')

        const start = performance.now()
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = Math.round(target * eased).toLocaleString('pt-PT')

          if (progress < 1) {
            raf = requestAnimationFrame(step)
          } else {
            finish()
          }
        }

        raf = requestAnimationFrame(step)
        io.disconnect()
      },
      { threshold: 0.35 }
    )

    io.observe(el)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [target, duration])

  return ref
}
