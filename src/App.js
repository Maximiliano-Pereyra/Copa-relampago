import React from "react";
import "./App.css";
import Layout from "../src/layout/Layout"
import PaginaPremios from "./paginas/PaginaPremios/PaginaPremios";
import Portada from "./paginas/Portada/Portada";


function App() {

  return (

    <Layout>
      <Portada></Portada>
    </Layout>

  )
}

export default App;