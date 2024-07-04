import { Tag } from "../Tag";
import { CoffeContainer } from "./styles";
import { ItemCounter } from "../../../../components/ItemCounter";
import { CartButton } from "../../../../components/CartButton";
import { TagProps } from "../Tag";

export interface CoffeeProps {
  id: number;
  iconPath: string;
  tags: TagProps[];
  name: string;
  description: string;
  price: number;
}

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export function CoffeeItem({
  iconPath,
  tags,
  name,
  description,
  price,
}: CoffeeProps) {
  const priceFormatted = formatNumber(price);
  console.log(iconPath);
  return (
    <CoffeContainer>
      <div className="itemHolder">
        <img className="coffeeImg" src={iconPath} alt="" />
        <div className="tagList">
          {tags.map((tag) => {
            return <Tag key={tag.id} id={tag.id} name={tag.name} />;
          })}
        </div>
        <h1 className="coffeeTitle">{name}</h1>
        <p>{description}</p>
        <footer>
          <div className="price">
            <p>r$</p>
            <div className="priceValue">{priceFormatted}</div>
          </div>
          <div className="addToCart">
            <ItemCounter number={1} />
            <CartButton />
          </div>
        </footer>
      </div>
    </CoffeContainer>
  );
}
