import React, { useState, useRef } from "react"; // Importa React e hooks useState e useRef
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import burguer1 from "../../assets/burger 1.png"; // Importa uma imagem para ser usada no componente
import GlobalStyle from "../../styles/globalStyles"; // Importa estilos globais
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para navegação

// Importa componentes e estilos necessários
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
} from "./styles";

import Button from "../../components/Button"; // Importa o componente Button

function App() {
  // Declaração do estado para armazenar os pedidos
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate(); // Hook para navegação entre páginas

  // Referências para os campos de entrada
  const inputOrder = useRef();
  const inputClientName = useRef();

  // Função para validar os campos de entrada
  function validarCampos() {
    if (inputOrder.current.value === "") {
      alert("Por favor, preencha o campo de Pedido."); // Alerta o usuário
      return false; // Retorna falso se o campo estiver vazio
    }
    if (inputClientName.current.value === "") {
      alert("Por favor, preencha o campo de Nome."); // Alerta o usuário
      return false; // Retorna falso se o campo estiver vazio
    }
    return true; // Retorna verdadeiro se ambos os campos estão preenchidos
  }

  // Função assíncrona para adicionar um novo pedido
  async function addNewPedido(event) {
    event.preventDefault(); // Evita o comportamento padrão do botão (que recarregaria a página)

    // Valida os campos antes de enviar
    if (validarCampos()) {
      try {
        // Faz uma requisição POST para adicionar um novo pedido
        const { data: newPedido } = await axios.post(
          "https://api-desafio-codeclub-burguer-mwik.vercel.app/order", // URL da API corrigida
          {
            order: inputOrder.current.value, // Captura o valor do campo de pedido
            clientName: inputClientName.current.value, // Captura o valor do campo de nome
          }
        );

        // Atualiza o estado com o novo pedido adicionado
        setPedidos([...pedidos, newPedido]);

        // Limpa os campos após o envio
        inputOrder.current.value = "";
        inputClientName.current.value = "";

        // Foca no campo de pedido após o envio
        inputOrder.current.focus();

        // Navega para a página de pedidos após adicionar o pedido com sucesso
        navigate("/pedidos");
      } catch (error) {
        // Captura e exibe um erro se a requisição falhar
        alert("Erro ao adicionar o pedido: " + error.response?.data?.message || error.message);
      }
    }
  }

  // Renderiza o componente
  return (
    <>
      <GlobalStyle /> {/* Adiciona estilo global */}
      <Container>
        <Image alt="logo-imagem" src={burguer1} /> {/* Exibe a imagem do logo */}

        <ContainerItens>
          <H1>Faça seu pedido!</H1> {/* Título da página */}
          <InputLabel>Pedido</InputLabel> {/* Rótulo do campo de entrada */}
          <Input ref={inputOrder} placeholder="" /> {/* Campo de entrada para o pedido */}

          <InputLabel>Nome do Cliente</InputLabel> {/* Rótulo do campo de entrada */}
          <Input ref={inputClientName} placeholder="" /> {/* Campo de entrada para o nome do cliente */}

          <Button type="button" onClick={addNewPedido}>Novo Pedido</Button> {/* Botão para adicionar o pedido */}
        </ContainerItens>
      </Container>
    </>
  );
}

export default App; // Exporta o componente App para ser utilizado em outras partes da aplicação
