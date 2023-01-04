import React from "react";
import './navegador.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navegador(){
    return(
        <div className="ContenedorNavegador">
            <h1 className="TituloNavegador">Copa Relámpago</h1>
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