import Item from './Item'
import './ItemList.css'

function ItemList ({listProducts}) {

    const {products} = listProducts

    return(
        <div className='container'>
            {products.map((product) =>
                <Item key={product.id} product={product}/>
            )} 
        </div>
    )
}

export default ItemList;