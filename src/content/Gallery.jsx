import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { useGlobalContext } from '../context'
import axios from 'axios'
//esse metodo (import.meta.env.VITE_API_KEY) é para armazenar a API essa API n pode ficar exposta, pois deixa teu data center vulneravel, porém na aba network.Fetch/XHR da para ver a API ainda.
const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
export const Gallery = () => {
    const {searchValue} = useGlobalContext()

    const {data, isError, isLoading} = useQuery({
        /* o motivo dessa key estar em esquare [] é q assim vc pode adicionar mais items junto dela, como nesse caso, ja que o query library só entrega o cache 
        vc precisa prover uma modificaçaõ no valor da key para que o query library possa enviar o novo result */
        queryKey:['images', searchValue],
        queryFn: async()=> {
            const result = await axios.get(`${url}&query=${searchValue}`)
            return result
        }
    })

   
     
    if(isLoading){
        return <div className='loading'></div>
    }
    if(isError){
        return <section className='image-container'><h1>ERROR</h1></section> 
    }

// const results = results.search
console.log(data.data);
if(data.data.results.lenght < 1){
    return <h1>NO RESULTS...</h1>
}
   
  return (
    <section className='image-container'>
        {data.data.results.map((item)=>{
            
            return <img key={item?.id} src={item?.urls?.regular} alt={item?.alt_description}  className='img' />
        })}
    </section>
  )
}

