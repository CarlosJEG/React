import { useContext } from 'react'
import { Context } from '../CartContext/CartContext'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './CartView.css'

function CartView() {

  const { cart, deleteItem, total } = useContext(Context)

    return (
      <>
        <div className="cart__container">
          <div className="cart__description">
            <div className="cart__Product">
              <p className='cart__ProductDescrptionFinal'>Product</p>
            </div>
            <div className="cart__Product">
              <p className='cart__ProductDescrptionFinal'>Price</p>
            </div>
            <div className="cart__Product">
              <p className='cart__ProductDescrptionFinal'>Count</p>
            </div>
            <div className="cart__Product">
              <p className='cart__ProductDescrptionFinal'>Total</p>
            </div>
            <div className="cart__Product">
              <p className='cart__ProductDescrptionFinal'>Delete Product</p>
            </div>
          </div>
          {cart.map((cartP) => {
            return <div className="cart__ProductFinal">
              <div className="cart__ProductFinalContent">
                <img src={cartP.thumbnail} alt="Product"/>
                <p>{cartP.title}</p>
              </div>
              <div className="cart__ProductFinalContent">
                <p>$ {cartP.price}</p>
              </div>
              <div className="cart__ProductFinalContent">
                <p>{cartP.count}</p>
              </div>
              <div className="cart__ProductFinalContent">
                <p>$ {cartP.price * cartP.count}</p>
              </div>
              <div className="cart__ProductFinalContent">
              <Button variant="contained" color="error" className='btnProd' onClick={()=>{deleteItem(cartP.id)}}>Delete Product</Button>
              </div>
            </div>
          })}
            <div className="result">
              <div className="result__Content">
                <Link to={"/"}><Button variant="contained">Back</Button></Link>
              </div>
              <div className="result__Content">
                <p>$ {total}</p>
              </div>
              <div className="result__Content">
                <Link to={"/form"}><Button variant="contained" color="success">finish Purchase</Button></Link>
              </div>
            </div>
        </div>
      </>
    );
  }

export default CartView;