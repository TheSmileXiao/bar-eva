import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  padding: 2rem 10px;
  background: #150f0f;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductCard = styled.div`
  line-height: 1.5;
  display : inline-block;
  min-width: 25%;
  max-width: 50%;
  `;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5px;
`;

export const ProductTitle = styled.p`
  color: white;

  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.5rem;
  color: white;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: white;

`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;