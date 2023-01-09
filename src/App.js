import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/layout/Layout"
import PaginaPremios from "./paginas/PaginaPremios/PaginaPremios";
import Portada from "./paginas/Portada/Portada";
import Reglamento from "./paginas/Reglamento/Reglamento";


function App() {

  return (

    <Layout>
      <Routes>
      <Route path="/" element={<Portada/>}></Route>
      <Route path="/premios" element={<PaginaPremios/>}></Route>
      <Route path="/reglamento" element={<Reglamento/>}></Route>
      </Routes>
    </Layout>

  )
}

export default App;