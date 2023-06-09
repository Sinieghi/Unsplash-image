import React from 'react'
import { useGlobalContext } from '../context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

 export const ThemeToggle = () => {

    const {setIsDarkTheme, isDarkTheme, storedTheme} = useGlobalContext()

    const bodySettings = document.querySelector('body')
    bodySettings.classList.toggle('dark-theme', isDarkTheme)

//essa function é para checar o background de escolha do firefox, mas como n tenho useState e estou com preguiça de fazer no reducer só anotei msm
    //   const getInicialBg = ()=>{
    //   const preferBg = window.matchMedia('(prefers-color-scheme:dark)').matches
    //   console.log(preferBg);
    //   return preferBg
    // }
    // useEffect(()=>{
    //   document.body.classList.toggle('dark-theme', isDarkTheme)
    // },[isDarkTheme])
    
   
  return (
    <section className='torrle-container'>
        
        
        <button className='dark-toggle' onClick={setIsDarkTheme}>{storedTheme? <BsFillMoonFill className='toggle-icon'/> : <BsFillSunFill className='toggle-icon'/>}</button>
        
    </section>
  )
}

