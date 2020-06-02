import { useState, useEffect } from 'react'

export const useHandlerScroll = () => {
    const [scroll, setScroll ] = useState(false)
  
    const handleScroll = () => {
      let scroll = document.documentElement.scrollTop > 50
      if(scroll){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
  
    useEffect(() => {
      window.onscroll = () => handleScroll()
    }, [scroll])
  
    return { scroll }
  }