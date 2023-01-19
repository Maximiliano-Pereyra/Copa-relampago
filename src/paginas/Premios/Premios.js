import React from "react";
import "./premios.css";

export default function Premios() {
  return (
    <div className="contenedorPremios">
      <img src="./copapremiosbanner.gif" className="imagenBanner"></img>
      <h2 className="tituloPremiosRes">Copa <span> de Verano</span></h2>
      <div className="tituloPremios">
        <h2>Premios</h2>
        <div className="marcasPremios">
         <a href="https://www.instagram.com/compamates/"><img src="./compamates.jpg"></img></a>
          <a href="https://www.instagram.com/zazodeportes/"><img src="./zazo.png"></img></a>
          <a href="https://www.instagram.com/eleniasports/"><img src="./eleniapremios.png"></img></a>
        </div>
      </div>
      <div className="seccionPremios">
        <div className="copaOro">
          <h3>Copa de oro</h3>
          <h4>CAMPEÓN</h4>
          <ul>
            <li><img src="./trofeo.png"></img>Trofeo de campeón</li>
            <li><img src="./suma-signo-mas.png"></img>100 puntos de campeón</li>
            <li><img src="./camiseta-de-futbol.png"></img>Camisetas ZAZO personalizadas</li>
            <li><img src="./ventas.png"></img>50% de descuento al Apertura 2023</li>
            <li><img src="./flecha-arriba.png"></img>Ascenso a la categoría A</li>
            <li><img src="./botella-de-vino.png"></img>6 fernet</li>
            <li><img src="./barbacoa.png"></img>Asado en Elenia</li>
          </ul>
          <h4>SUBCAMPEÓN</h4>
          <ul>
            <li><img src="./trofeo.png"></img>Trofeo de subcampeón</li>
            <li><img src="./ventas.png"></img>50% de descuento al Apertura 2023</li>
            <li><img src="./flecha-arriba.png"></img>Ascenso a la categoría A</li>
            <li><img src="./botella-de-vino.png"></img>6 fernet</li>
          </ul>
        </div>
        <div className="copaPlata">
        <h3>Copa de plata</h3>
          <h4>CAMPEÓN</h4>
          <ul>
            <li><img src="./trofeo.png"></img>Trofeo de campeón</li>
            <li><img src="./ventas.png"></img>25% de descuento al Apertura 2023</li>
            <li><img src="./flecha-arriba.png"></img>Ascenso a la categoría B</li>
            <li><img src="./botella-de-vino.png"></img>3 fernet</li>
          </ul>
          <h4>SUBCAMPEÓN</h4>
          <ul>
            <li><img src="./flecha-arriba.png"></img>Ascenso a la categoría B</li>
            <li><img src="./botella-de-vino.png"></img>3 fernet</li>
          </ul>
        </div>
      </div>
      <div className="condicionesPremios">
        <h2>Términos y condiciones</h2>
        <div className="terminosPremios">
        <h4>Inscripciones:</h4>
        <p>En todos los casos, para reclamar el porcentaje de inscripción ganado, los equipos deberán tener en su plantel al menos 8 jugadores del plantel ganador.</p>
        <h4>Camisetas ZAZO personalizadas:</h4>
        <p>El máximo de camisetas a cubrir será de 12. En caso de desear añadir más camisetas o agregar shorts al pedido, los costos corren por cuenta de cada equipo.</p>
        <h4>Ascensos:</h4>
        <p>Para el Apertura 2022, la categoría Libre sufrirá reestructuraciones, dividiéndose en tres categorías, A, B y C. Quienes logren los ascensos a través de la Copa de Verano jugarán en categoría A y B, ambas a disputarse los lunes por la noche.</p>
        <h4>Asado en Elenia:</h4>
        <p>El premio solo será válido para el día de la final. Si no se reclama ese mismo día, pierde validez.</p>
        <h4>Fernet:</h4>
        <p>Los fernet otorgados a cada beneficiario no podrán ser consumidos en el predio. Caso contrario, el equipo infractor comenzará con penalizaciones el Apertura.</p>
     </div> 
     </div>
    </div>
  );
}
