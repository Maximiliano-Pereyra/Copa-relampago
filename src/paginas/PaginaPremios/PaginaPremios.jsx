import React from 'react'
import './PaginaPremios.css'

export default function PaginaPremios() {
    return (
        <>
            <div className='tituloPremios'>

            </div>
            <div className='tablaDePremios'>

                <div class="pricing-wrapper clearfix">

                    <h1 class="pricing-table-title"><img className='logoPremios' src="./logoCopa.png" alt="logo" />Listado de premios</h1>

                    <div class="pricing-table">
                        <h3 class="pricing-title">Copa de Oro</h3>
                        <div class="price">Campeón</div>

                        <ul class="table-list">
                            <li>Chapa <span>de Campeon</span></li>
                            <li>Trofeo <span>Copa Relampago</span></li>
                            <li>Inscripcion <span>para el proximo torneo</span></li>
                            <li>Juego de camisetas <span>personalizadas</span></li>
                            <li>Gorras Brandcaps <span>para todo el equipo</span></li>
                            <li>Caja Fernet <span>Branca</span></li>
                            <li>150 <span>Puntos de Campones</span></li>
                        </ul>

                        {/*  <div class="table-buy">
                            <p>$60<sup>/ mes</sup></p>
                            <a href="#" class="pricing-action">Comprar</a>
                        </div> */}
                    </div>

                    <div class="pricing-table recommended">
                        <h3 class="pricing-title">Copa de Oro</h3>
                        <div class="price">Segundo</div>

                        <ul class="table-list">
                            <li>Trofeo <span>Copa Relampago</span></li>
                            <li>50% de Inscripcion <span>para el proximo torneo</span></li>
                            <li>Gorras Brandcaps <span>para todo el equipo</span></li>
                            <li>Caja Fernet <span>Branca</span></li>
                            <li>60 puntos de Campones <span>Branca</span></li>
                        </ul>

                        {/*   <div class="table-buy">
                            <p>$100<sup>/ mes</sup></p>
                            <a href="#" class="pricing-action">Comprar</a>
                        </div> */}
                    </div>

                    <div class="pricing-table">
                        <h3 class="pricing-title">Copa de Plata</h3>
                        <div class="price">Campeón</div>

                        <ul class="table-list">
                            <li>Trofeo <span>Copa Relampago</span></li>
                            <li>1/2 <span>Caja de Fernet Branca</span></li>
                            <li>50 <span>Puntos de Campeones</span></li>
                        </ul>

                        {/*   <div class="table-buy">
                            <p>$200<sup>/ mes</sup></p>
                            <a href="#" class="pricing-action">Comprar</a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='terminosYcondiciones'>
                <h2>Terminos y condiciones</h2>
                <div class="page">
                    <div class="timeline">
                        <div class="timeline__group">
                            <span class="timeline__year time" aria-hidden="true">Inscripciones</span>
                            <div class="timeline__cards">
                                <div class="timeline__card card">
                                    <div class="card__content">
                                        <p>100% – El equipo que quiera reclamarlo, deberá estar formado por al menos 8 jugadores de quienes hayan logrado el premio.
                                            50% – El equipo que quiera reclamarlo, deberá estar formado por al menos 8 jugadores de quienes hayan logrado el premio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__group">
                            <span class="timeline__year time" aria-hidden="true">Cajas de Fernet Branca</span>
                            <div class="timeline__cards">
                                <div class="timeline__card card">
                                    <div class="card__content">
                                        <p>En todos los casos, serán únicamente entregadas a personas mayores de 18 años que acrediten identidad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__group">
                            <span class="timeline__year time" aria-hidden="true">Camisetas personalizadas Zazo Deportes</span>
                            <div class="timeline__cards">
                                <div class="timeline__card card">
                                    <div class="card__content">
                                        <p>Serán única y exclusivamente para los jugadores en lista oficial, con un mínimo de 10 y máximo de 12 jugadores. El equipo, una vez informado, tendrá 10 días para enviar los diseños. Incluyen remeras Premium ZAZO Deportes,
                                            con escudo del equipo, marca, y números dorsales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="timeline__group">
                            <span class="timeline__year time" aria-hidden="true">Gorras personalizadas Brandcaps Argentina</span>
                            <div class="timeline__cards">
                                <div class="timeline__card card">
                                    <div class="card__content">
                                        <p>
                                            Serán única y exclusivamente para los jugadores en lista oficial, con un mínimo de 10 y máximo de 12 jugadores. El equipo, una vez informado, tendrá 10 días para enviar los diseños sujeto a disponilibidad de diseños del proveedor. Incluye gorras Trucker calidad normal, con logitipo del equipo (u otro) sublimado. Los adicionales, como calidad premium, u otros tipos de «pegado» de logotipo, irán a cuenta del cliente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
