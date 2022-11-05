import { useContext } from 'react'
import { Context } from '../CartContext/CartContext'

function CartView() {

  const { cart } = useContext(Context)
  console.log(cart)

    return (
      <>
        <h1>gg</h1>
      </>
    );
  }

export default CartView;