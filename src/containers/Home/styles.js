import styled from "styled-components";



export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
 margin-left: auto;
 margin-right: auto;
 
`;

export const ContainerItens = styled.div`

`;


export const Image = styled.img`
 width:  180px; 
 height:  180px;
margin-top: 10px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const InputLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #EEEEEE;
  line-height: 22px;
  margin: 0 0 0 22px;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const H1 = styled.h1`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
export const Input = styled.input`
  background:rgba(97, 89, 89, 0.87);
  border-radius: 14px;
  width: 320px;
  height: 50px;

  padding: 0 25px;
  margin-bottom: 34px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #ffffff;

  @media (max-width: 768px) {
    padding-left: 15px;
    font-size: 16px;
  }
`;
