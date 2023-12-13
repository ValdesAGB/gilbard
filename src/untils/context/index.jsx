import { createContext, useEffect, useState } from 'react'

export const ClickContext = createContext()
export const ClickProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(20) // Hauteur par défaut pour les grands écrans
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Fonction pour mettre à jour la hauteur de l'en-tête en fonction de la taille de l'écran
    const updateHeaderHeight = () => {
      const screenWidth = window.innerWidth
      setWindowWidth(screenWidth) // Met à jour la largeur de l'écran dans l'état
    }

    // Ajoutez un écouteur d'événement pour détecter les changements de taille d'écran
    window.addEventListener('resize', updateHeaderHeight)

    // Nettoyage : supprimez l'écouteur lors de la suppression du composant
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  useEffect(() => {
    // Met à jour la hauteur de l'en-tête en fonction de la largeur de l'écran actuelle
    if (windowWidth < 576) {
      setHeaderHeight(120)
    } else if (windowWidth >= 576 && windowWidth < 992) {
      setHeaderHeight(120)
    } else if (windowWidth >= 992 && windowWidth < 1200) {
      setHeaderHeight(100)
    } else {
      setHeaderHeight(120)
    }
  }, [windowWidth])

  const handleClick = (event, targetId, targetHref) => {
    event.preventDefault()

    if (targetHref === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition - headerHeight

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <ClickContext.Provider value={{ handleClick, headerHeight }}>
      {children}
    </ClickContext.Provider>
  )
}

export const HeaderContext = createContext()
export const HeaderProvider = ({ children }) => {
  const [onTop, setOnTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop
      setOnTop(top === 0 ? true : false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContext.Provider value={{ onTop, setOnTop }}>
      {children}
    </HeaderContext.Provider>
  )
}
