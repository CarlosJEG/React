import NavBar from './Components/NavBar/NavBar';
import CartWidget from './Components/NavBar/CartWidget';
import ItemList from './Components/NavBar/ItemList'
import ItemCount from './Components/Main/ItemCount'
/* import ItemListContainer from './Components/Main/ItemListContainer' */

function App() {
  return (
    <>
    <NavBar>
      <CartWidget></CartWidget>
      <ItemList></ItemList>
    </NavBar>
    {/* <ItemListContainer greeting = "Hola mundo desde JSX"></ItemListContainer> */}
    <ItemCount stock = {20}></ItemCount>
    </>
  );
}

export default App;