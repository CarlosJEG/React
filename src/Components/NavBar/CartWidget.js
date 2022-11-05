import { useContext } from 'react';
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { Context} from '../CartContext/CartContext'
import Badge from '@mui/material/Badge';

function CartWidget() {

  const { qty } = useContext(Context);

    return (
      <div className="cartIcon">
        <Badge badgeContent={qty} color="primary">
          <Link to={"/Cart"}>
            <ShoppingCartIcon className="cart"></ShoppingCartIcon>
          </Link>
        </Badge>
      </div>
    );
  }

export default CartWidget;