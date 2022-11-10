import Item from './Item'
import './ItemList.css'

function ItemList ({listProducts}) {

    return(
        <div className='container'>
            {listProducts.map((product) =>
                <Item key={product.id} products={product}/>
            )} 
        </div>
    )
}

export default ItemList;