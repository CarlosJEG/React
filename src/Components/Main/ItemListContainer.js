import './ItemListContainer.css'

function ItemListContainer(prop) {
    
    const {greeting} = prop

    return (
      <main className="greeting">{greeting}</main>
    );
  }
  
  export default ItemListContainer;