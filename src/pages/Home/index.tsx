import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import homeImg from "../../assets/home-img.png";
import { HomePresentationContainer, CoffeeListContainer } from "./styles";
import { CoffeeProps, CoffeeItem } from "./components/Coffee";

import Expresso from "../../assets/Expresso.png";
import Cremoso from "../../assets/Cremoso.png";
import Capuccino from "../../assets/Capuccino.png";
import Mocaccino from "../../assets/Mocaccino.png";
import Latte from "../../assets/Latte.png";

const coffeeList: CoffeeProps[] = [
  {
    id: 1,
    iconPath: Expresso,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: [{ name: "tradicional", id: 1 }],
  },
  {
    id: 2,
    iconPath: Cremoso,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    tags: [{ name: "tradicional", id: 1 }],
  },
  {
    id: 3,
    iconPath: Latte,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    tags: [
      { name: "tradicional", id: 1 },
      { name: "com leite", id: 2 },
    ],
  },
  {
    id: 4,
    iconPath: Capuccino,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    tags: [
      { name: "tradicional", id: 1 },
      { name: "com leite", id: 2 },
    ],
  },
  {
    id: 5,
    iconPath: Mocaccino,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    tags: [
      { name: "tradicional", id: 1 },
      { name: "com leite", id: 2 },
    ],
  },
];

export function Home() {
  return (
    <>
      <HomePresentationContainer>
        <div className="homeDescription">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className="homeOptions">
            <div className="column">
              <div className="option">
                <div className="icon">
                  <ShoppingCart className="cart" size={16} color="#fff" />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div className="option">
                <div className="icon">
                  <Timer className="timer" size={16} color="#fff" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>
            <div className="column">
              <div className="option">
                <div className="icon">
                  <Package className="package" size={16} color="#fff" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className="option">
                <div className="icon">
                  <Coffee className="coffee" size={16} color="#fff" />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </div>
        <img src={homeImg} alt="" />
      </HomePresentationContainer>
      <CoffeeListContainer>
        <h1 className="coffeeListTitle">Nossos cafés</h1>
        <div className="coffeeList">
          {coffeeList.map((coffee) => (
            <CoffeeItem
              key={coffee.id}
              id={coffee.id}
              description={coffee.description}
              iconPath={coffee.iconPath}
              name={coffee.name}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
          {/* <CoffeeItem
            name={coffee1.name}
            description={coffee1.description}
            price={coffee1.price}
            icon={coffee1.icon}
            tags={coffee1.tags}
          /> */}
        </div>
      </CoffeeListContainer>
    </>
  );
}
