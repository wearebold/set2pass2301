import { animate, stagger, inView } from 'motion'

export const useTextAnimations = () => {
  const setInitialState = (element: string | Element | Element[]) => {
    if (typeof element === 'string') {
      const elements = document.querySelectorAll(element)
      elements.forEach(el => {
        el.style.opacity = '0'
        el.style.visibility = 'hidden'
      })
    } else if (element instanceof Element) {
      element.style.opacity = '0'
      element.style.visibility = 'hidden'
    } else if (Array.isArray(element)) {
      element.forEach(el => {
        el.style.opacity = '0'
        el.style.visibility = 'hidden'
      })
    }
  }

  const fadeInUp = (element: string | Element | Element[], delay = 0) => {
    if (!element) return
    setInitialState(element)

    inView(element, () => {
      return animate(element, {
        opacity: [0, 1],
        y: [20, 0],
        visibility: ['hidden', 'visible']
      }, {
        duration: 0.6,
        delay,
        easing: [0.25, 0.1, 0.25, 1],
      })
    }, { margin: "-20% 0px -20% 0px" })
  }

  const slideInFromLeft = (element: string | Element | Element[], delay = 0) => {
    if (!element) return
    setInitialState(element)

    inView(element, () => {
      return animate(element, {
        opacity: [0, 1],
        x: [-50, 0],
        visibility: ['hidden', 'visible']
      }, {
        duration: 0.7,
        delay,
        easing: [0.25, 0.1, 0.25, 1],
      })
    }, { margin: "-20% 0px -20% 0px" })
  }

  const timelineEffect = (elements: Element[], options = {}) => {
    if (!elements.length) return
    
    elements.forEach(el => {
      setInitialState(el)
    })

    const defaultOptions = {
      startDelay: 0,
      staggerDelay: 0.2,
      duration: 0.8,
      distance: 50,
      direction: 'right' as 'right' | 'left' | 'up' | 'down'
    }

    const finalOptions = { ...defaultOptions, ...options }
    const { startDelay, staggerDelay, duration, distance, direction } = finalOptions

    const getTransform = () => {
      switch (direction) {
        case 'right': return { x: [-distance, 0] }
        case 'left': return { x: [distance, 0] }
        case 'up': return { y: [distance, 0] }
        case 'down': return { y: [-distance, 0] }
        default: return { x: [-distance, 0] }
      }
    }

    elements.forEach((element, index) => {
      inView(element, () => {
        return animate(element, {
          opacity: [0, 1],
          visibility: ['hidden', 'visible'],
          ...getTransform(),
        }, {
          duration,
          delay: startDelay + (index * staggerDelay),
          easing: [0.25, 0.1, 0.25, 1],
        })
      }, { margin: "-20% 0px -20% 0px" })
    })
  }

  const staggerChildren = (elements: string | Element | Element[], staggerTime = 0.1) => {
    if (!elements) return
    setInitialState(elements)

    inView(elements, () => {
      return animate(elements, {
        opacity: [0, 1],
        y: [20, 0],
        visibility: ['hidden', 'visible']
      }, {
        delay: stagger(staggerTime),
        duration: 0.5,
        easing: [0.25, 0.1, 0.25, 1],
      })
    }, { margin: "-20% 0px -20% 0px" })
  }

  const typewriter = (element: string | Element | Element[], delay = 0) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element
    if (!el || Array.isArray(el)) return

    const text = el.textContent
    el.textContent = ''
    el.style.visibility = 'visible'
    
    const characters = text?.split('') || []
    characters.forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.opacity = '0'
      span.style.display = 'inline-block'
      el.appendChild(span)
    })

    inView(el, () => {
      return animate(el.children, {
        opacity: [0, 1]
      }, {
        delay: stagger(0.03, { start: delay }),
        duration: 0.1,
        easing: 'linear'
      })
    }, { margin: "-20% 0px -20% 0px" })
  }

  return {
    fadeInUp,
    slideInFromLeft,
    staggerChildren,
    typewriter,
    timelineEffect
  }
}
