import React from "react";
import './clausuraf.css'

export default function ClausuraF(){
    return(
        <div className="contenedorCf">
            <div className="cabeceraCf">
                <img className="logoCf" src="./jausbycoparelampago1.png"></img>
                <h1 className="tituloCf">Bienvenida a JAUS<br></br>By Copa Relámpago</h1>
                <p>Córdoba, Argentina</p>
            </div>
            <div className="lugarCf">
                <h3>¿Dondé?</h3>
                <img className="logoCf2" src="./1america.png"></img>
                <button className="botonCf"><img src="./ubicacion.png"></img>Ubicación Google Maps</button>
                <p>Categoría Libre Femenino <br></br> Domingos por la tarde</p>
                <h4>Promociones especiales para equipos que participen tambien en alguna categoría Masculino CR</h4>
            </div>
            <div className="experienciaCf">
                <h2>EXPERIENCIA JAUS COPA RELÁMPAGO</h2>
                <p>Los detalles importan, por eso estamos encima de cada uno de ellos.</p>
                <p>Fútbol, amig@s y organización. Nuestros principales pilares.</p>
                <div className="seccionExperiencia">
                <div className="iconosExperiencia" >
                    <img src="./football.png"></img>
                    <p>FÚTBOL</p>
                </div>
                <div className="iconosExperiencia" >
                    <img src="./people.png"></img>
                    <p>AMIG@S</p>
                </div>
                <div className="iconosExperiencia" >
                    <img src="./planning.png"></img>
                    <p>ORGANIZACIÓN</p>
                </div>
                </div>
            </div>
            <div className="serviciosCf">
                <h2>Durante cada partido habrá...</h2>
                <div className="seccionIconosCf">
                <div className="iconosCf">
                    <img src="./user.png"></img>
                    <p>ARBITR@ DE LIGA</p>
                </div>
                <div className="iconosCf">
                    <img src="./healthcare.png"></img>
                    <p>PARAMÉDIC@</p>
                </div>
                <div className="iconosCf">
                    <img src="./camera.png"></img>
                    <p>FOTÓGRAF@</p>
                </div>
                <div className="iconosCf">
                    <img src="./notes.png"></img>
                    <p>PLANILLER@</p>
                </div>
                </div>
                <h3>Además de...</h3>
                <div className="checksCf">
                    <div className="contentChecks">
                        <p><img src="./check-mark.png"></img>NOTAS DE CADA PARTIDO</p>
                        <p><img src="./check-mark.png"></img>DREAM TEAM CADA FECHA</p>
                        <p><img src="./check-mark.png"></img>ENTREVISTAS TEMÁTICAS</p>
                        <p><img src="./check-mark.png"></img>PREMIOS INDIVIDUALES</p>
                    </div>
                    <div className="contentChecks">
                    <p><img src="./check-mark.png"></img>JUGADORAS LEYENDA</p>
                    <p><img src="./check-mark.png"></img>REGISTRO DE ASISTENTES</p>
                    <p><img src="./check-mark.png"></img>ARCHIVO HISTÓRICO</p>
                    <p><img src="./check-mark.png"></img>TABLAS Y ESTADÍSTICAS</p>
                    </div>
                </div>
          </div>
        </div>
    )
}