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

  // Função para carregar pedidos
  useEffect(() => {
    async function fetchPedidos() {
      try {
        // Função assíncrona para buscar pedidos da API
        const response = await axios.get("https://api-desafio-codeclub-burguer-mwik.vercel.app/order"); // URL da API corrigida
        setPedidos(response.data); // Atualiza o estado com os pedidos recebidos
      } catch (error) {
        alert("Erro ao carregar pedidos: " + error.message); // Tratamento de erro
      }
    }
    fetchPedidos(); // Chama a função para buscar pedidos ao carregar o componente
  }, []); // O array vazio garante que a função seja chamada apenas uma vez na montagem do componente

  async function DeletaPedido(pedidoId) {
    // Função assíncrona para deletar um pedido
    try {
      await axios.delete(`https://api-desafio-codeclub-burguer-mwik.vercel.app/order/${pedidoId}`); // Faz a requisição DELETE à API

      // Remover o pedido deletado do estado
      const newPedidos = pedidos.filter((pedido) => pedido.id !== pedidoId); // Filtra os pedidos, removendo o deletado
      setPedidos(newPedidos); // Atualiza o estado com os pedidos restantes
    } catch (error) {
      alert("Erro ao deletar pedido: " + error.message); // Tratamento de erro
    }
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
