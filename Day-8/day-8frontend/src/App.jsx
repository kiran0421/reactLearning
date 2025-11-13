import { useState } from 'react'
import UseFetch from './hooks/UseFetch'
import './App.css'

function App() {
    const {data} = UseFetch ("https://dummyjson.com/products")
    console.log(data);
  return (
    <div>
      {data.products && data.products.map((item)=>{
       return <p key = {item.id}>{item.title}</p>
      })}
    </div>
  )
}

export default App
