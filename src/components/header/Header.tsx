import { useState } from 'react';
import menu from '../../assets/menu.png';
import profile from '../../assets/profile.png';
import cart from "../../assets/cart.png";

type HeaderProps = {
  buyCount: number;
  showCart: () => void; // Define the type for showCart function
};

const Header = ({ buyCount, showCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="Header">
      <div className="inHeader1">
        <div >
          <img src={menu} alt="" onClick={toggleMenu} />
        </div>
        <h3 style={{fontWeight:'900'}} className='headerP'>
          Sneakers
        </h3>
        <h4>Collections</h4>
        <h4>Men</h4>
        <h4>Women</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
      <div className="inHeader2">
        <div onClick={showCart}>
          <img src={cart} alt="" />
        </div>
        <div className='cartBox' style={{ display: 'flex', alignItems: 'center', }}>
          <p className='buyCount'>{buyCount}</p>
          <img src={profile} alt="" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu">
          <div className="menu-content">
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
