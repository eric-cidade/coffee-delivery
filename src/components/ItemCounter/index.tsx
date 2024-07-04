import { Minus, Plus } from "phosphor-react";
import { ItemCounterContainer } from "./styles";

interface ItemCounterProps {
  number: number;
}
export function ItemCounter({ number }: ItemCounterProps) {
  return (
    <ItemCounterContainer>
      <Minus className="symbol" size={14} weight="bold" />
      <span>{number}</span>
      <Plus className="symbol" size={14} weight="bold" />
    </ItemCounterContainer>
  );
}
