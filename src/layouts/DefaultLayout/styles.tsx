import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  padding: 0;

  background-color: ${(props) => props.theme["background"]};

  display: flex;
  flex-direction: column;
`;
