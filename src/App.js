import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemContent/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = "welcome to the amazing store..."></ItemListContainer>
    <ItemDetailContainer/>
    </>
  );
}

export default App;