import './NavBar.css';
import logo from './logo.svg';

function NavBar({children}) {

  const [CartWidget, ItemList] = children

  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__logo">
          <a href="index.html">
            <img src={logo} alt="logo" />
          </a>
        </div>
          {ItemList}
          {CartWidget}
      </div>
    </header>
  );
}

export default NavBar;