import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import Navbar from "./components/Navbar";
import ProductItem from './components/ProductItem';

function App() {
const [products, setProducts] = useState([])
useEffect(() => {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
}, [])

  return (
  <div>
    <Navbar/>
    <h1>Hola</h1>
    <Routes>
      <Route path='/' element={<Navigate to="home"/>}/>
      <Route path='/home' element={<h2>Holaaaaa</h2>} />
      <Route path='/productos' element={<ProductList products={products} />} />
      <Route path='/productos/:id' element={<ProductItem />} />
      <Route path='/cart' element={<h2>Carrito</h2>}/>
    </Routes>
  </div>
  )
}

export default App
