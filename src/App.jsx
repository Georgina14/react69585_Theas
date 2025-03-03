import './App.css'
import Navbar from './components/Navbar'
import Button from './components/ItemListContainer'

function App() {
  return (
    <>
       <Navbar /> 
       <div className='container'>
          <Button text= 'Coffee Lover' />
          <Button text= 'Tengo una Tienda' />
        </div>
       
    </>
  );
}

export default App
