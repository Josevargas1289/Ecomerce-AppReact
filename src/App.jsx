import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import ProductsId from './pages/ProductsId'
import AppNavbar from './components/AppNavbar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import Car from './components/Car'


function App() {

  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div className="App">
      <HashRouter>
       
        <AppNavbar />
        <Footer />
        

        {isLoading && <LoadingScreen />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produc/:id' element={<ProductsId />} />
          <Route path='/login' element={<Login />} />
          <Route path='/purchases' element={<Purchases />} />
        </Routes>
     
      </HashRouter>
      
    </div>

  )
}

export default App
