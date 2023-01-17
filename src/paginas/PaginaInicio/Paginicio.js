import React from "react";
import "./paginicio.css";
import TablasP from "../../componentes/TablasPortada/TablasP";

export default function Paginicio() {
  return (
    <div className="contenedorPrincipalNoti">
      <div className="conteNoti">
        <h1 className="tituloNoti" data-text="El periodismo que le gusta a la gente">El periodismo que le gusta a la gente</h1>
    </div>  
<div className="segundoContenedorNoti">
    <div className="noticias-cuerpo">  
    <div className="inicioNoticias">
 <figure className="noticia-carta">
        <img className="noticia-foto" src='https://coparelampago.com.ar/wp-content/uploads/2022/12/321285959_867441067712841_5838174016055201846_n-1024x681.jpg' alt=''></img>
        <div className="capa-noticia">
            <h3 className="tituloNoticia">EL CAMINO DEL CAMPEÓN: RESA-K CAMPEÓN</h3>
            <p className="textoNoticia">Resa-K: la sobriedad para llegar a la quinta estrella El equipo oriundo de Villa Allende se coronó campeón por quinta vez en Copa Relámpago, alzando así su segunda Copa de Oro. Te contamos el camino recorrido por uno de los planteles más jovenes de la categoría.</p>
            <button className="botonNoti btn-noti"><span>Lee más...</span></button>
        </div>
    </figure>
    <figure className="noticia-carta">
        <img className="noticia-foto" src='https://coparelampago.com.ar/wp-content/uploads/2022/12/Copa-Relampago-4-12-2022-4225-1024x683.jpg' alt=''></img>
        <div className="capa-noticia">
            <h3 className="tituloNoticia">EL CAMINO DEL CAMPEÓN: YAPEYÚ CAMPEÓN</h3>
            <p className="textoNoticia">Yapeyú de Copa Relámpago ¡escuchenlo, escuchenlo, escuchenlo! Con un desempeño casi perfecto, Yapeyú se coronó campeón de Copa de Oro por segunda vez consecutiva. Te contamos el recorrido del “Yape” campeón.</p>
            <button className="botonNoti btn-noti"><span>Lee más...</span></button>
        </div>
    </figure>
    </div>
    <div className="inicioNoticias">
    <figure className="noticia-carta">
        <img className="noticia-foto" src='https://coparelampago.com.ar/wp-content/uploads/2022/11/316107842_660836759075076_5797489847171382617_n-1024x683.jpg' alt=''></img>
        <div className="capa-noticia">
            <h3 className="tituloNoticia">RESUMEN FECHA 10 – AMÉRICA</h3>
            <p className="textoNoticia">Penúltima fecha del libre de los domingos. La cima está que arde y muchas cosas pueden pasar. Te contamos lo mejor de cada uno de los partidos. UN PASO MÁS YAPEYÚ VENCIÓ A LOS CHAVALES Y ESTÁ A UN PASO DE CORONARSE CAMPEÓN DE LIGUILLA .</p>
            <button className="botonNoti btn-noti"><span>Lee más...</span></button>
        </div>
    </figure>
    <figure className="noticia-carta">
        <img className="noticia-foto" src='https://coparelampago.com.ar/wp-content/uploads/2022/11/315718994_658960845929334_3413814298888657227_n-1024x681.jpg' alt=''></img>
        <div className="capa-noticia">
            <h3 className="tituloNoticia">RESUMEN DA GUÍA – SEMIS SUB 23 – FECHA 02 SUB 18</h3>
            <p className="textoNoticia">Domingo de alto vuelo en Sol de Mayo. En Sub 23 se jugaron las semifinales de Copa de Oro y ya tenemos los dos equipos que se diputarán la gloria máxima el próximo fin de semana. En Sub 18, se jugó la segunda fecha, con tres partidos picantes picantes. </p>
            <button className="botonNoti btn-noti"><span>Lee más...</span></button> 
        </div>
    </figure>
    </div>
    <div className="bannerNoticiasInicio">
    <button className="botonNoti btn-noti"><span>Ver notas anteriores</span></button> 
       <a href="https://www.instagram.com/zazodeportes/"><img src="./bannerzazo2.png"></img></a> 
    </div>
</div>
<div className="marcasNoti">
        <div className="marcasImagenes">
            <img src="./zazo.png"></img>
            <a href="https://www.instagram.com/zazodeportes/"><button className="botonMarcas btn-marcas"><span>Conjuntos Deportivos</span></button> </a>
        </div>
        <div className="marcasImagenes">
            <img src="./damelosiempre.png"></img>
           <a href="https://www.instagram.com/damelosiempre/"><button className="botonMarcas btn-marcas"><span>Indumentaria Urbana</span></button> </a> 
        </div>
        <div className="marcasImagenes">
            <img src="./brandcaps.png"></img>
           <a href="https://www.instagram.com/brandcapsargentina/"> <button className="botonMarcas btn-marcas"><span>Gorras Personalizadas</span></button></a> 
        </div>
        <iframe className="videoExtendido" src="https://www.youtube.com/embed/FGJaF3XxEvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="botonesUtilesInicio">
        <a href="https://www.youtube.com/@CopaRelampago"><button className="botonUtil btn-util"><span>Visitá nuestro canal de YouTube</span></button></a> 
        <button className="botonUtil btn-util"><span>Guía para cargar mi equipo</span></button>  
       <a href="https://api.whatsapp.com/send?phone=5493516829820&text=¡Hola!%20Quiero%20más%20información%20para%20inscribir%20mi%20equipo%20en%20CopaRelampago"> <button className="botonUtil btn-util"><span>Quiero más información del torneo</span></button> </a>
        </div>   
    </div>
    </div>
    <TablasP></TablasP>
     </div>
  );
}
