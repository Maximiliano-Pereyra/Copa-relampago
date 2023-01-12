import React from "react";
import "./App.css";
import Layout from "../src/layout/Layout"
import PaginaPremios from "./paginas/PaginaPremios/PaginaPremios";
import Portada from "./paginas/Portada/Portada";
import ClausuraF from "./paginas/ClausuraF/ClausuraF";
import ClausuraM from "./paginas/ClausuraM/ClausuraM";


function App() {

  return (
    <Layout>
      <ClausuraM></ClausuraM>
    </Layout>
  )
}

export default App;