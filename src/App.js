import React from "react";
import "./App.css";
import Layout from "../src/layout/Layout"
import PaginaPremios from "./paginas/PaginaPremios/PaginaPremios";
import Portada from "./paginas/Portada/Portada";
import ClausuraF from "./paginas/ClausuraF/ClausuraF";


function App() {

  return (
    <Layout>
      <ClausuraF></ClausuraF>
    </Layout>
  )
}

export default App;