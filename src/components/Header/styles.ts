import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin:2rem 10rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between; 


  nav{
    display: flex;
    align-items: center;
    gap: .75rem;
    


     .loc{ 
      font-size: 1.125rem;
      font-weight: bold;
      padding: .5rem;
      display: flex;
      align-items: center;
      //justify-content: center;
      background-color: ${props => props.theme['purple-light']};
      border-radius: 6px;
      color: ${props => props.theme['purple-dark']};
      

      
    }
  }
  .mapPin{
    color: ${props => props.theme['purple']};
  }
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .cart {
    display: flex;
    align-items: center;
    padding: .5rem;
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 6px;
  }
  .shoppingCart{
    color: ${props => props.theme['yellow-dark']};
    
  }

`