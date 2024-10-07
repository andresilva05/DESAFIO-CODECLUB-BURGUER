import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Atualize aqui
import Home from "./containers/Home";
import Pedidos from "./containers/Pedidos";

function AppRoutes() { // Renomeei para evitar confusão com o componente Routes do react-router
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Use element em vez de component */}
        <Route exact path="/pedidos" element={<Pedidos />} /> {/* Use element em vez de component */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
