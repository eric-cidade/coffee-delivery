import { CartButtonContainer } from "./styles";
import CoffeeCart from "../../assets/coffe-cart.svg";

export function CartButton() {
  return (
    <CartButtonContainer>
      <img src={CoffeeCart} alt="" />
    </CartButtonContainer>
  );
}
