import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom/client'; // Importa o método para renderizar a aplicação no DOM
import AppRoutes from './routes'; // Importa o componente de rotas da aplicação
import GlobalStyle from './styles/globalStyles'; // Importa os estilos globais da aplicação

// Renderiza a aplicação na raiz do DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* Renderiza as rotas da aplicação */}
    <AppRoutes />
    {/* Aplica os estilos globais definidos */}
    <GlobalStyle />
  </>
);


// Explicações Adicionais:
// Importações: O código começa com a importação de bibliotecas e componentes necessários. O React é necessário para criar componentes, e o ReactDOM é utilizado para manipular o DOM.

// ReactDOM.createRoot: Este método é usado para criar um "root" React na página. Ele recebe um elemento do DOM (neste caso, o elemento com o ID 'root') onde a aplicação será montada.

// render: O método render é chamado para renderizar o conteúdo da aplicação dentro do root criado. Ele aceita um fragmento JSX (<>...</>) que permite agrupar múltiplos elementos sem adicionar um nó extra ao DOM.

// AppRoutes: Este componente é responsável por definir e renderizar as rotas da aplicação. Ele controla a navegação entre diferentes páginas ou componentes da sua aplicação.

// GlobalStyle: Este componente aplica estilos globais que afetarão toda a aplicação, garantindo uma aparência consistente.