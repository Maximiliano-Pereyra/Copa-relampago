import React from "react";
import "./App.css";
import Layout from "../src/layout/Layout"
import PaginaPremios from "./paginas/PaginaPremios/PaginaPremios";
import Portada from "./paginas/Portada/Portada";
import ClausuraF from "./paginas/ClausuraF/ClausuraF";
import ClausuraM from "./paginas/ClausuraM/ClausuraM";
import Paginicio from "./paginas/PaginaInicio/Paginicio";
import TablasP from "./componentes/TablasPortada/TablasP";
import Premios from "./paginas/Premios/Premios";


function App() {

  return (
    <Layout>
      <Premios></Premios>
    </Layout>
  )
}

export default App;