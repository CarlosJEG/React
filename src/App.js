import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemContent/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartView from "./Components/NavBar/CartView"
import AboutUsView from "./Components/ItemContent/AboutUsView"

function App() {

  const greeting = "welcome to the amazing store..."

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting ={greeting}/>}/>
        <Route path='/category/:id' element={<ItemListContainer greeting ={greeting}/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path="*" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<CartView/>}/>
        <Route path="/AboutUsView" element={<AboutUsView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;