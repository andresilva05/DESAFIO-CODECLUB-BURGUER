import React, { useState, useRef } from "react";
import axios from "axios";
import burguer1 from "../../assets/burger 1.png";
import GlobalStyle from "../../styles/globalStyles"; // Importação correta para exportação default
import { useNavigate } from "react-router-dom";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
} from "./styles";

import Button  from "../../components/Button";

function App() {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  const inputOrder = useRef();
  const inputClientName = useRef();

  // Função para validar os campos
  function validarCampos() {
    if (inputOrder.current.value === "") {
      alert("Por favor, preencha o campo de Pedido.");
      return false; // Não enviar se o campo estiver vazio
    }
    if (inputClientName.current.value === "") {
      alert("Por favor, preencha o campo de Nome.");
      return false; // Não enviar se o campo estiver vazio
    }
    return true; // Campos preenchidos corretamente
  }

  async function addNewPedido(event) {
    event.preventDefault(); // Evitar o comportamento padrão do botão

    if (validarCampos()) {
      // Validar antes de enviar
      try {
        const { data: newPedido } = await axios.post(
          "http://localhost:4000/order",
          {
            order: inputOrder.current.value,
            clientName: inputClientName.current.value,
          }
        );

        setPedidos([...pedidos, newPedido]);

        // Limpar os campos após o envio
        inputOrder.current.value = "";
        inputClientName.current.value = "";
      } catch (error) {
        alert("Erro ao adicionar o pedido: " + error.response.data.message);
      }
    }

    // Remover o redirecionamento
    navigate("/pedidos");
  }


  return (
    <>
      <GlobalStyle /> {/* Adicionar estilo global */}
      <Container>
        <Image alt="logo-imagem" src={burguer1} />

        <ContainerItens>
          <H1>Faça seu pedido!</H1>
          <InputLabel>Pedido</InputLabel>
          <Input ref={inputOrder} placeholder="" />

          <InputLabel>Nome do Cliente</InputLabel>
          <Input ref={inputClientName} placeholder="" />

          <Button type="button" onClick={addNewPedido}>Novo Pedido</Button>
        </ContainerItens>
      </Container>
    </>
  );
}

export default App;
