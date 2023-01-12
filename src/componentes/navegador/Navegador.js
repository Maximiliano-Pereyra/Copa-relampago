import React from "react";
import './navegador.css'

export default function Navegador(){
    return(
        <div className="ContenedorNavegador">
          <div className="menuDesplegable">
            <input type={'checkbox'}></input>
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu">
      <a href="#"><li>Portada</li></a>
      <a href="#"><li>Clausura Femenino</li></a>
      <a href="#"><li>Clausura Masculino</li></a>
      <a href="#"><li>Premios</li></a>
      <a href="#"><li>Cargar Equipo</li></a>
      <a href="#"><li>Reglamento</li></a>
      <a href="#"><li>Fixture</li></a>
      <a href="#"><li>Estadísticas</li></a>
      <a href="#"><li>Archivo Histórico</li></a>
      <a href="#"><li>Jugadores Leyendas</li></a>
      <a href="#"><li>Seleccionado</li></a>
    </ul>
          </div>
          <div className="tituLogo">
          <img className="navegadorLogo" src="./logoCopa.png"></img>
            <h1 className="TituloNavegador">Copa Relámpago</h1> 
            </div>
            <ul className="ListaNavegador">
                <li className="LineaNavegador"><a className="NavegadorSecciones">Portada</a></li>
                <li className="LineaNavegador"><a className="NavegadorSecciones">Información</a>
                  <div className="NavegadorDropDown">
                    <ul className="ListaDropDown">
                        <li className="LineaNavegador"><a>Próximos Torneos</a>
                          <div className="NavegadorDropDown1">
                            <ul className="ListaDropDown">
                                <li className="LineaNavegador"><a>Clausura Femenino 2022</a></li>
                                <li className="LineaNavegador"><a>Clausura Masculino 2022</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className="LineaNavegador"><a>Premios</a></li>
                        <li className="LineaNavegador"><a>Cargar Equipo</a></li>
                        <li className="LineaNavegador"><a>Reglamento</a></li>
                    </ul>
                  </div>
                </li>
                <li className="LineaNavegador"><a className="NavegadorSecciones">Fixture</a></li>
                <li className="LineaNavegador"><a className="NavegadorSecciones">Estadísticas</a>
                <div className="NavegadorDropDown">
                    <ul className="ListaDropDown">
                        <li className="LineaNavegador"><a>Archivo Histórico</a></li>
                        <li className="LineaNavegador"><a>Jugadores Leyenda</a></li>
                    </ul>
                  </div>
                </li>
                <li className="LineaNavegador"><a className="NavegadorSecciones">Seleccionado</a></li>
            </ul>
        </div>
    )
}