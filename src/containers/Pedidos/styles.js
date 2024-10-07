import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerItens = styled.div``;

export const List = styled.ul`
  list-style: none; /* Remove a lista padrão */
  padding: 0; /* Remove o padding padrão */
`;

export const Paragraph = styled.p`
  color: #ffffff94;
  font-weight: 300;
  font-size: 1.125rem; /* 18px */
  line-height: 1.375rem; /* 22px */
  max-width: 300px; 
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
`;

export const DeleteButton = styled.button`
  background: none; /* Remove o fundo do botão */
  border: none; /* Remove a borda do botão */
  cursor: pointer; /* Cursor de ponteiro ao passar o mouse */

  &:hover {
    color: #ff6666; /* Exemplo de mudança de cor no hover */
  }

  &:focus {
    outline: 2px solid #ffffff; /* Destaque para acessibilidade */
  }
`;

export const NameParagraph = styled.p`
  margin-top: 25px;
  color: #ffffff; /* Cor do texto */
  font-size: 1.125rem; /* 18px */
  text-align: left; /* Alinhamento à esquerda do nome */
  font-weight: 700;
  line-height: 1.375rem; /* 22px */
`;

export const ListItem = styled.li`
  background-color: #2b2b2b; /* Fundo dos itens da lista */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 1rem; /* Espaçamento interno */
  margin-bottom: 0.625rem; /* 10px */
  display: flex; /* Alinha o conteúdo */
  justify-content: space-between; /* Espaço entre os elementos */
  align-items: center; /* Alinhamento vertical dos itens */
  flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
  width: 100%; /* Para que o item ocupe toda a largura disponível */
`;


export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: 40px; /* Ajuste para o botão mais próximo dos campos */
  background: rgba(65, 60, 60, 0.87);
  border: none;
  font-size: 1.0625rem; /* 17px */
  font-weight: 900;
  line-height: 2.5px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s; /* Transição suave */

  &:hover {
    transform: scale(1.02); /* Leve aumento ao passar o mouse */
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98); /* Redução ao clicar */
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 1rem; /* 16px */
    gap: 8px;
  }
`;

export const Image = styled.img`
  width: 135px;
  height: 200px;
  margin-top: 10px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const H1 = styled.h1`
  font-size: 1.75rem; /* 28px */
  color: #ffffff;
  text-align: center; /* Centraliza o título */
  font-weight: 700;
  line-height: 2rem; /* 32px */
  margin-bottom: 1.875rem; /* 30px */

  @media (max-width: 768px) {
    font-size: 1.75rem; /* 28px */
    margin-bottom: 1.25rem; /* 20px */
  }
`;
