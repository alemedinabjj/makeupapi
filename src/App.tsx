import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Details } from './pages/Details'
import { Footer } from './components/Footer'
import { ButtonToTop } from './components/ButtonToTop'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      <ButtonToTop />
      <Footer />
    </BrowserRouter>
  )
}

export default App
