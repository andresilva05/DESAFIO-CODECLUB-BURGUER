import { Button } from "./styles"; // Importa o componente Button estilizado do arquivo de estilos

// Define o componente funcional DefaultButton
function DefaultButton({ children, ...props }) {
    // 'children' é uma prop especial que contém o conteúdo passado entre as tags do componente
    // '...props' permite receber e repassar quaisquer outras props que sejam passadas para o componente

    return (
        // Renderiza o componente Button estilizado, passando as props recebidas e o conteúdo entre as tags
        <Button {...props}>{children}</Button>
    );
}

// Exporta o componente DefaultButton para ser utilizado em outras partes da aplicação
export default DefaultButton;


// Explicações Adicionais:
// children: É uma prop padrão no React que permite que você passe elementos ou texto dentro de um componente. Neste caso, children representa o conteúdo que será exibido dentro do botão.

// ...props: O operador de propagação (spread operator) é utilizado para passar todas as propriedades que não foram explicitamente desestruturadas (ou seja, todas as props que você deseja adicionar ao componente Button). Isso é útil para permitir que você adicione, por exemplo, eventos como onClick, estilos, ou outras propriedades ao botão sem precisar definir cada uma delas manualmente.

// export default: Esta é a maneira de exportar um componente no JavaScript. Isso permite que o componente seja importado e utilizado em outros arquivos.