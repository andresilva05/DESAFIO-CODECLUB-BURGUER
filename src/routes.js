import React from "react"; // Importa a biblioteca React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa componentes para configuração de rotas
import Home from "./containers/Home"; // Importa o componente da página inicial
import Pedidos from "./containers/Pedidos"; // Importa o componente da página de pedidos

// Componente que define as rotas da aplicação
function AppRoutes() { // Renomeado para evitar confusão com o componente Routes do react-router
  return (
    <Router> {/* Envolve a aplicação em um Router para habilitar a navegação */}
      <Routes> {/* Define as rotas da aplicação */}
        {/* Define a rota para a página inicial */}
        <Route exact path="/" element={<Home />} /> {/* Use 'element' em vez de 'component' para renderizar o componente */}
        {/* Define a rota para a página de pedidos */}
        <Route exact path="/pedidos" element={<Pedidos />} /> {/* Use 'element' em vez de 'component' para renderizar o componente */}
      </Routes>
    </Router>
  );
}

export default AppRoutes; // Exporta o componente AppRoutes para ser utilizado em outras partes da aplicação




// Explicações Adicionais:
// Importações: O código começa com a importação de React e dos componentes necessários do react-router-dom. Isso permite que a aplicação gerencie a navegação entre diferentes componentes (páginas).

// Router: O componente Router (renomeado para BrowserRouter) é usado para envolver a aplicação, permitindo o gerenciamento de rotas e navegação em um ambiente de navegador. Ele escuta as mudanças na URL e renderiza o componente correspondente.

// Routes: Dentro do Router, o componente Routes é usado para definir um grupo de rotas.

// Route: Cada Route define uma relação entre uma URL (o path) e um componente (o element) que deve ser renderizado quando a URL correspondente for acessada. O uso de element em vez de component é a nova abordagem a partir da versão 6 do react-router.

// Exportação: O componente AppRoutes é exportado para que possa ser utilizado em outros arquivos, como o arquivo de entrada principal, onde as rotas serão renderizadas na aplicação.