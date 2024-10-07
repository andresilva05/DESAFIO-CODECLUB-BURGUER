import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem; /* Adicionando padding responsivo */
`;

export const ContainerItens = styled.div``;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px; /* Ajuste para telas menores */
  }
`;

export const InputLabel = styled.p`
  font-weight: 700;
  font-size: 1.125rem; /* 18px */
  color: #eeeeee;
  line-height: 1.375rem; /* 22px */
  margin: 0 0 0 1.375rem; /* 22px */

  @media (max-width: 768px) {
    margin-left: 0.625rem; /* 10px */
    font-size: 1rem; /* 16px */
  }
`;

export const H1 = styled.h1`
  font-size: 1.75rem; /* 28px */
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  line-height: 2rem; /* 32px */
  margin-bottom: 1.875rem; /* 30px */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* 24px, ajuste para dispositivos menores */
    margin-bottom: 1.25rem; /* 20px */
  }
`;

export const Input = styled.input`
  background: rgba(97, 89, 89, 0.87);
  border-radius: 14px;
  width: 320px;
  height: 50px;
  padding: 0 1.5rem; /* 25px */
  margin-bottom: 2rem; /* 34px */
  border: none;
  outline: none;
  font-size: 1.125rem; /* 18px */
  color: #ffffff;

  @media (max-width: 768px) {
    padding-left: 1rem; /* 15px */
    font-size: 1rem; /* 16px */
  }

  @media (max-width: 480px) {
    width: 100%; /* Para ocupar a largura total em dispositivos menores */
    font-size: 0.875rem; /* 14px */
  }

  &:focus {
    border: 2px solid #ffffff; /* Exemplo de estilo de foco */
  }
`;
