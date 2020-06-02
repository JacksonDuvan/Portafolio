import { useState, useEffect } from 'react'

export const useHandlerScreen = () => {
    const [screen, setScreen ] = useState(false) 
    const [menu, setMenu] = useState(false)
  
    const handleScreen = () => {
      let responsive = window.matchMedia('(max-width: 767px)')
      responsive.addListener((event) => {
        if(event.matches){
          setScreen(event.matches)
        }else{
          setScreen(false)
        }
      })
      setScreen(responsive.matches)
    }
  
    useEffect(() => {
      handleScreen()
    },[screen]) 
  
    return { screen, menu, setMenu }
  
  }