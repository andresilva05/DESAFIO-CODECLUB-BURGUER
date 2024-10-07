import { createGlobalStyle } from "styled-components"; // Importa a função createGlobalStyle da biblioteca styled-components

// Cria um estilo global usando styled-components
export default createGlobalStyle`
  // Seleciona todos os elementos da página
  * {
    margin: 0; // Remove a margem padrão de todos os elementos
    padding: 0; // Remove o preenchimento padrão de todos os elementos
    box-sizing: border-box; // Define o modelo de caixa para incluir bordas e preenchimentos na largura e altura
    font-family: 'Roboto', sans-serif; // Define a fonte padrão como Roboto, com sans-serif como fallback
    text-decoration: none; // Remove a decoração de texto (como sublinhado) de todos os elementos
  }

  // Estiliza o corpo da página
  body {
    background: #0A0A10; // Define a cor de fundo da página como um tom escuro
  }
`;


// Explicações Adicionais:
// createGlobalStyle: Essa função permite criar estilos que se aplicam globalmente à aplicação. Isso é útil para definir estilos que você quer que todos os componentes compartilhem, como fontes, cores de fundo, margens, etc.

// Box-sizing: Com box-sizing: border-box, o tamanho de um elemento será calculado incluindo o preenchimento e a borda, tornando mais fácil o controle sobre o layout e as dimensões dos elementos.

// Font-family: O uso da fonte 'Roboto' é uma escolha comum em design web, pois oferece um visual moderno e legível. O fallback sans-serif garante que, caso a fonte Roboto não esteja disponível, uma fonte sem serifa padrão será utilizada.

// Background color: A cor de fundo definida com background: #0A0A10 proporciona uma estética escura e pode ajudar a destacar outros elementos na página.