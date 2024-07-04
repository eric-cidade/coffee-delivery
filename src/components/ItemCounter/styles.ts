import styled from "styled-components";

export const ItemCounterContainer = styled.div`
  background-color: ${props => props.theme['base-button']};
  padding: .25rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  
  span {
    font-size: 1rem;
    color: ${props => props.theme['base-title']}

  }
  .symbol {
    color: ${props => props.theme['purple']}
  }


`