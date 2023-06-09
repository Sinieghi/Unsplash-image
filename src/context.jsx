import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { DARK, SUBMIT } from './content/action'
import { reducer } from './content/reducer'





const AppContext = createContext()



const defaultState = {
isDarkTheme:1,
searchValue:'cat',
}

export const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, defaultState)

    const setIsDarkTheme = ()=>{
        dispatch({type:DARK})
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      
      const search = e.target.elements.search.value
      if(!search)return;
      dispatch({type:SUBMIT, payload: {search}})
    }
// para armazenar o bg-color anterior do user
localStorage.setItem('BGtheme',state.isDarkTheme);
const storedTheme = localStorage.getItem('BGtheme') ==='true'
    console.log(storedTheme);
  return (
    <AppContext.Provider value={{...state, storedTheme, setIsDarkTheme, handleSubmit}}>
        {children}
    </AppContext.Provider>
    
  )
}

export const useGlobalContext = ()=>{
 return   useContext(AppContext)
}
