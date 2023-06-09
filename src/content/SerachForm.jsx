import React from 'react'
import { useGlobalContext } from '../context'

export const SerachForm = () => {
const {handleSubmit} = useGlobalContext()
  return (
    <section>
        <h1 className='title'>unsplash</h1>
    <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" name='search' placeholder='cat' className='form-input search-input'
        />
        <button type='submit' className='btn'>serch</button>
    </form>
    
    </section>
    
  )
}
