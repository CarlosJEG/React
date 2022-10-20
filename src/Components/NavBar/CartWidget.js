import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

function CartWidget() {

    return (
      <div className="cartIcon">
        <Link to={"/Cart"}>
          <ShoppingCartIcon className="cart"></ShoppingCartIcon>
        </Link>
      </div>
    );
  }

export default CartWidget;