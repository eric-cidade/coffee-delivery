import styled from "styled-components";


export const HomePresentationContainer = styled.div`
  padding: 5.75rem 10rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  .homeDescription {
    width: 36.75rem;
    font-family: 'Baloo 2', sans-serif;
    display: flex;
    flex-direction: column;
    h1 {
      color: ${props => props.theme['base-title']};
      font-size: 3rem; 
    }
    h2 { 
      color: ${props => props.theme['base-subtitle']};
      font-size: 1.25rem;
      margin-bottom: 3rem;


    }
  }

  .homeOptions{
   display: flex;
   justify-content: space-between;
   width: 34rem;
    
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 1.25rem
  }
  .option {
    display: flex;
    align-items: center;
    display: 1;
    gap: .75rem;

    p {
      font-size: 1rem;
      color: ${props => props.theme['base-text']};
      line-height: 130%;
    }
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  .icon {
    display: flex;
    align-items: center;
    
  }
  .cart{

    padding: .5rem;
    background-color: ${props => props.theme['yellow-dark']};
    border-radius: 50%;
  }
  .timer{

    padding: .5rem;
    background-color: ${props => props.theme['yellow']};
    border-radius: 50%;
  }
  .coffee{

    padding: .5rem;
    background-color: ${props => props.theme['purple']};
    border-radius: 50%;
  }
  .package{

    padding: .5rem;
    background-color: ${props => props.theme['base-text']};
    border-radius: 50%;
  }


`

export const CoffeeListContainer = styled.div`
  padding: 0rem 10rem;

  .coffeeListTitle{
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 3rem;
    
  }

  .coffeeList {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2rem;
  }
`


