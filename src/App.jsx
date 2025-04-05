import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} /> 
        <Route path='/product/:id' element={<ItemDetailContainer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
