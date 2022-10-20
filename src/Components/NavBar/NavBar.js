import './NavBar.css';
import logo from './logo.svg';
import ItemList from './CategoryList'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
          <ItemList/>
          <CartWidget/>
      </div>
    </header>
  );
}

export default NavBar;