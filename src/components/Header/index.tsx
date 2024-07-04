import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        <div className="loc">
          <MapPin className="mapPin" weight="fill" size={24} />
          <p>Porto Alegre, RS</p>
        </div>
        <div className="cart">
          <NavLink to="/cart">
            <ShoppingCart className="shoppingCart" weight="fill" size={24} />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  );
}
