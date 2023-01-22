import Promobar from './components/Promobar/Promobar'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Products from './components/Products/Products'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'

function App() {

  return (
    
    <div className="App">
      
      <Promobar />
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />

      </Routes>
     
      <Footer />

    </div>

  )
}

export default App
