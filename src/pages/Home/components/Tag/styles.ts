import styled from "styled-components";

export const TagContainer = styled.div`
  span {
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    padding: .25rem .5rem;
    border-radius: 25px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: .625rem;
  }
`