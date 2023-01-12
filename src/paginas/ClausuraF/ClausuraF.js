import React from "react";
import './clausuraf.css'

export default function ClausuraF(){
    return(
        <div className="contenedorCf">
            <div className="cabeceraCf">
                <img className="logoCf" src="./jausbycoparelampago1.png"></img>
                <h1 className="tituloCf">TORNEO CLAUSURA<br></br>2023</h1>
                <p>Córdoba, Argentina</p>
            </div>
            <div className="lugarCf">
                <h3>¿Dondé?</h3>
                <img className="logoCf2" src="./1america.png"></img>
                <button className="botonCf btn-cf"><span>Ubicación Google Maps</span></button>
                <p>Categoría Libre Femenino <br></br> Domingos por la tarde</p>
                <h4>¡Promociones especiales para equipos que participen tambien en alguna categoría Masculino CR!</h4>
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
          <div className="extraCf">
            <h3>SELECCIÓN JAUS COPA RELÁMPAGO</h3>
            <p>Afiliad@s a la Fédératione Internationale de <br></br> Football 7 y a la Asociación Argentina de Fútbol 7.</p>
            <p>El único Seleccionado Femenino en Córdoba <br></br>que compite en las máximas competencias nacionales. ¿Estan listas?</p>
            <img src="./AF7A-y-FIF7.png"></img>
          </div>
          <div className="requisitosCf">
            <h2>REQUISITOS E INSCRIPCIÓN</h2>
            <div className="seccionRequisitosPrincipalCf">
                <div className="seccionRequisitosCf ">
                    <img src="./pago.png"></img>
                    <h3>INSCRIPCIÓN</h3>
                    <p>Al cumplirse la fecha 02 de competición deberá estar abonado el %100 de la inscripción, de lo contrario el equipo podrá ser expulsado sin derecho a reclamo.</p>
                </div>
                <div className="seccionRequisitosCf">
                    <img src="./camiseta.png"></img>
                    <h3>CAMISETAS ENUMERADAS</h3>
                    <ul className="listaCamisetasCf">
                        <li><span>LIBRE:</span> obligatorio</li>
                        <li><span>SUB23:</span> obligatorio</li>
                        <li><span>SUB20:</span> obligatorio</li>
                        <li><span>SUB18:</span> obligatorio</li>
                        <li><span>SUB16:</span> obligatorio</li>
                        <li><span>FEMENINO:</span> obligatorio</li>
                    </ul>
                </div>
                <div className="seccionRequisitosCf">
                    <img src="./leyendo.png"></img>
                    <h3>REGLAMENTO</h3>
                    <p>En JAUS by CopaRelampago, lo fundamental es la disciplina. No se toleran faltas de respeto de ningún índole. Todos los equipos deben aceptar el reglamento para ser aceptados.</p>
                </div>
            </div>
          </div>
          <div className="seccionPasosCf">
            <div className="pasosCf">
                <img src="./globos-de-texto.png"></img>
                <h3>COMUNICARSE</h3>
                <p>Primero, comunicate con nosotros así te sacás todas las dudas, y te explicamos como inscribir tu equipo.</p>
                <button className="botonCf btn-cf"><span>Enviar WhatsApp</span></button>
            </div>
            <div className="pasosCf">
            <img src="./subir.png"></img>
                <h3>SUBIR EQUIPO</h3>
                <p>Cuando hables con nosotros, te vamos a pasar los datos para que puedas cargar tu equipo. Se hace Online.</p>
                <button className="botonCf btn-cf"><span>Cargar Lista</span></button>
            </div>
            <div className="pasosCf">
            <img src="./garrapata.png"></img>
                <h3>LISTO</h3>
                <p>Solo resta esperar hasta el primer partido. Todos los partidos figuran en el Fixture.</p>
            </div>
          </div>
          <div className="finalPaginaCf">
            <h2>BIENVENIDA A JAUS - BY COPA RELÁMPAGO</h2>
          </div>
        </div>
    )
}