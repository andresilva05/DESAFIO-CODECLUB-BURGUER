import React, { useState, useEffect } from "react"; // Importa as dependências do React
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import burguerPedidos from "../../assets/burger (1) 1.png"; // Imagem do logo
import GlobalStyle from "../../styles/globalStyles"; // Importação correta para estilo global
import Trash from "../../assets/lixeira.svg"; // Imagem do ícone de lixeira
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  List,
  ListItem,
  Paragraph,
  DeleteButton,
  NameParagraph,
} from "./styles"; // Importa componentes estilizados

function Pedidos() {
  const [pedidos, setPedidos] = useState([]); // Cria o estado para armazenar os pedidos
  const navigate = useNavigate(); // Inicializa o hook para navegação

  // Função para carregar pedidos (opcional, dependendo da sua lógica)
  useEffect(() => {
    async function fetchPedidos() {
      // Função assíncrona para buscar pedidos da API
      const response = await axios.get("http://localhost:4000/order");
      setPedidos(response.data); // Atualiza o estado com os pedidos recebidos
    }
    fetchPedidos(); // Chama a função para buscar pedidos ao carregar o componente
  }, []); // O array vazio garante que a função seja chamada apenas uma vez na montagem do componente

  async function DeletaPedido(pedidoId) {
    // Função assíncrona para deletar um pedido
    await axios.delete(`http://localhost:4000/order/${pedidoId}`); // Faz a requisição DELETE à API

    // Remover o pedido deletado do estado
    const newPedidos = pedidos.filter((pedido) => pedido.id !== pedidoId); // Filtra os pedidos, removendo o deletado
    setPedidos(newPedidos); // Atualiza o estado com os pedidos restantes
  }

  function goBackPage() {
    navigate("/"); // Navega de volta para a página inicial
  }

  return (
    <>
      <GlobalStyle /> {/* Adiciona estilo global */}
      <Container>
        <Image alt="logo-imagem" src={burguerPedidos} /> {/* Renderiza a imagem do logo */}

        <ContainerItens>
          <H1>Pedidos</H1> {/* Título da página */}

          <List>
            {pedidos.map((pedido) => ( // Mapeia sobre os pedidos para criar uma lista
              <ListItem key={pedido.id}> {/* Usar 'li' para listas, com chave única */}
                <div>
                  <Paragraph>{pedido.order}</Paragraph> {/* Exibe o pedido */}
                  <NameParagraph>{pedido.clientName}</NameParagraph> {/* Exibe o nome do cliente */}
                </div>

                <DeleteButton onClick={() => DeletaPedido(pedido.id)}> {/* Botão para deletar o pedido */}
                  <img src={Trash} alt="lata-de-lixo" /> {/* Ícone da lixeira */}
                </DeleteButton>
              </ListItem>
            ))}
          </List>

          <Button onClick={goBackPage}>Voltar</Button> {/* Botão para voltar à página anterior */}
        </ContainerItens>
      </Container>
    </>
  );
}

export default Pedidos; // Exporta o componente Pedidos para ser utilizado em outras partes da aplicação


// Explicações Adicionais:
// useEffect: Um hook que permite realizar efeitos colaterais em componentes funcionais, como buscar dados de uma API. No exemplo, ele é usado para buscar pedidos quando o componente é montado.

// axios: Uma biblioteca popular para fazer requisições HTTP. Neste caso, é utilizada para buscar e deletar pedidos da API.

// Filtragem de pedidos: Ao deletar um pedido, o estado é atualizado filtrando os pedidos existentes, de modo que o pedido excluído não seja mais exibido.

// Navegação: O useNavigate permite que você altere a rota da aplicação programaticamente, facilitando a navegação entre as páginas.