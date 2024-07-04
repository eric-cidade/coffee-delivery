import styled from "styled-components";

export const CoffeContainer = styled.div`

  width: 16rem;
  height: 19.375rem;
  margin-bottom: 3rem;
  border-radius: 6px 30px;
  background-color: ${props => props.theme['base-card']};
  

  .itemHolder {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-2.5rem);

    footer {
      margin-top: 2.5rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      
    }
    .coffeeTitle{
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    }
    
    
  }
  .coffeeImg{
    height: 7.5rem;
    margin-bottom: .5rem;
    }
  h1, p {
    text-align: center;

  }
  
  p {
    font-size: 0.875rem;
  }

  .price {
    display:flex;
    
    text-transform: uppercase;
    font-weight: bold;
    font-size: .875rem;
    gap: .25rem;
    p {
      display: flex;
      align-items:center;
    }

  }
  .priceValue {
    font-size: 1.5rem;
    color: ${props => props.theme['base-text']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: bolder;
  }

  .addToCart {
    display:flex;
    align-items:center;
    justify-content: center;
    gap: 1rem;
  }

  .tagList {
    display:flex;
    gap: 0.25rem;
    margin-bottom: .75rem;
  }
`