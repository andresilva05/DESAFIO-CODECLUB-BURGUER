import styled from "styled-components";



export const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 40px; /* Ajuste para o botão mais próximo dos campos */
  background: #D93856;
  border: none ;
  font-size: 17px;
  font-weight: 900;
  line-height: 2.5px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;


  &:hover {
    transform: scale(1.02); /* Leve aumento ao passar o mouse */
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98); /* Redução ao clicar */
  }

     
  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
    gap: 8px;
  }
`;