import React, { useState, useEffect } from "react";
import axios from "axios";
import burguerPedidos from "../../assets/burger (1) 1.png";
import GlobalStyle from "../../styles/globalStyles"; // Importação correta para exportação default
import Trash from "../../assets/lixeira.svg";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  List,
  ListItem ,
  Paragraph ,
  DeleteButton,
  NameParagraph,
} from "./styles";

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  // Função para carregar pedidos (opcional, dependendo da sua lógica)
  useEffect(() => {
    async function fetchPedidos() {
      const response = await axios.get("http://localhost:4000/order");
      setPedidos(response.data);
    }
    fetchPedidos();
  }, []);

  async function DeletaPedido(pedidoId) {
    await axios.delete(`http://localhost:4000/order/${pedidoId}`);

    // Remover o pedido deletado do estado
    const newPedidos = pedidos.filter((pedido) => pedido.id !== pedidoId);
    setPedidos(newPedidos);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <>
      <GlobalStyle /> {/* Adicionar estilo global */}
      <Container>
        <Image alt="logo-imagem" src={burguerPedidos} />

        <ContainerItens>
          <H1>Pedidos</H1>

          <List>
            {pedidos.map((pedido) => (
              <ListItem  key={pedido.id}>
                {" "}
                {/* Use 'li' para listas */}
                <div>
                  <Paragraph >{pedido.order}</Paragraph>
                  <NameParagraph >{pedido.clientName}</NameParagraph>
                </div>
            
                <DeleteButton onClick={() => DeletaPedido(pedido.id)}>
                  <img src={Trash} alt="lata-de-lixo" />
                </DeleteButton>
              </ListItem>
            ))}
          </List>

          <Button onClick={goBackPage}>Voltar</Button>
        </ContainerItens>
      </Container>
    </>
  );
}

export default Pedidos;
