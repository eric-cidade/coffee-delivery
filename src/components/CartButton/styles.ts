import styled from "styled-components";

export const CartButtonContainer = styled.div`
  background-color: ${props => props.theme['purple-dark']};
  border-radius: 6px;
  color: white;
  display:flex;
  align-items:center;
  justify-content: center;
  padding: .35rem;

  div{
    display: 1;
  }
`