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
export const List = styled.ul`
  list-style: none; /* Remove a lista padrão */
  padding: 0; /* Remove o padding padrão */
`;

export const Paragraph = styled.p`
 color: #ffffff94;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  max-width: 300px; 
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;
`;

export const DeleteButton = styled.button`
  background: none; /* Remove o fundo do botão */
  border: none; /* Remove a borda do botão */
  cursor: pointer; /* Cursor de ponteiro ao passar o mouse */
`;
export const NameParagraph = styled.p`
  margin-top: 25px;
  color: #ffffff; /* Cor do texto */
  font-size: 18px; /* Tamanho da fonte */
  text-align: left; /* Alinhamento à esquerda do nome */
  font-weight: 700;
  line-height: 22px;
  `;

export const ListItem = styled.li`
  background-color: #2b2b2b; /* Fundo dos itens da lista */
  border-radius: 8px; /* Bordas arredondadas */
  padding: 15px; /* Espaçamento interno */
  margin-bottom: 10px; /* Espaço entre os itens */
  display: flex; /* Alinha o conteúdo */
  justify-content: space-between; /* Espaço entre os elementos */
  align-items: center; /* Alinhamento vertical dos itens */
  flex-wrap: wrap; /* Permite que os itens quebrem linha se necessário */
  
  
`;



export const Button = styled.button`
  width: 342px;
  height:68px;
  margin-top: 40px; /* Ajuste para o botão mais próximo dos campos */
  background:rgba(65, 60, 60, 0.87);
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

export const Image = styled.img`
     width: 135px;
     height: 200px;
margin-top: 10px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const H1 = styled.h1`
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  line-height: 32px;
  text-align: center; /* Centraliza o título */
  margin-bottom: 20px; /* Espaço abaixo do título */

  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;
