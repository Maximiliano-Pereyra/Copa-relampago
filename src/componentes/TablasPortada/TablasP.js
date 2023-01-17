import React from "react";
import "./tablasp.css";

export default function TablasP() {
  return (
    <div className="tablasPortada">
      <h1>TABLAS DE POSICIONES</h1>
      <h4>(Visualizá todas las tablas en la sección de estadísticas)​</h4>
      <div className="cuerpoTablas">
        <div className="seccionTablas">
          {/* tabla elenia sabado */}
          <table className="demotable">
            <h3>Elenia Sábado</h3>
            <thead>
              <tr>
                <td colspan="3"></td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="3"></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>Pos</th>
                <th width="210">Equipo</th>
                <th width="50">A</th>
                <th width="50">J</th>
                <th width="50">G</th>
                <th width="50">E</th>
                <th width="50">P</th>
                <th width="50">GF</th>
                <th width="50">DG</th>
                <th width="100">Pts</th>
              </tr>
              <tr>
                <th>1</th>
                <td><img src="./bunker.png"></img>Bunker FC</td>
                <td>-</td>
                <td>9</td>
                <td>8</td>
                <td>8</td>
                <td>1</td>
                <td>38</td>
                <td>18</td>
                <td>16</td>
              </tr>
              <tr>
                <th>2</th>
                <td><img src="./leicester.png"></img>Leicester +30</td>
                <td>-</td>
                <td>9</td>
                <td>7</td>
                <td>1</td>
                <td>1</td>
                <td>32</td>
                <td>20</td>
                <td>15</td>
              </tr>
              <tr>
                <th>3</th>
                <td><img src="./Falta-Escudo.png"></img>Los Bandidos</td>
                <td>-</td>
                <td>9</td>
                <td>7</td>
                <td>1</td>
                <td>1</td>
                <td>34</td>
                <td>15</td>
                <td>15</td>
              </tr>
              <tr>
                <th>4</th>
                <td><img src="./lapeste.png"></img>La Peste FG</td>
                <td>2</td>
                <td>9</td>
                <td>5</td>
                <td>1</td>
                <td>3</td>
                <td>33</td>
                <td>9</td>
                <td>11</td>
              </tr>
              <tr>
                <th>5</th>
                <td><img src="./lateoria.png"></img>La Teoría</td>
                <td>-</td>
                <td>8</td>
                <td>4</td>
                <td>0</td>
                <td>4</td>
                <td>25</td>
                <td>5</td>
                <td>8</td>
              </tr>
              <tr>
                <th>6</th>
                <td><img src="./oncecajas.png"></img>Once Cajas</td>
                <td>-</td>
                <td>9</td>
                <td>4</td>
                <td>0</td>
                <td>5</td>
                <td>31</td>
                <td>-1</td>
                <td>8</td>
              </tr>
              <tr>
                <th>7</th>
                <td><img src="./lapeña.png"></img>Atlético La Peña</td>
                <td>-</td>
                <td>9</td>
                <td>2</td>
                <td>2</td>
                <td>5</td>
                <td>23</td>
                <td>-19</td>
                <td>6</td>
              </tr>
              <tr>
                <th>8</th>
                <td><img src="./pucara.png"></img>Pucará</td>
                <td>3</td>
                <td>9</td>
                <td>1</td>
                <td>3</td>
                <td>5</td>
                <td>21</td>
                <td>-6</td>
                <td>5</td>
              </tr>
              <tr>
                <th>9</th>
                <td><img src="./Falta-Escudo.png"></img>El Bajo</td>
                <td>-</td>
                <td>9</td>
                <td>2</td>
                <td>1</td>
                <td>6</td>
                <td>21</td>
                <td>-10</td>
                <td>5</td>
              </tr>
              <tr>
                <th>10</th>
                <td><img src="./allboys.png"></img>All Boys FC</td>
                <td>-</td>
                <td>9</td>
                <td>0</td>
                <td>1</td>
                <td>8</td>
                <td>11</td>
                <td>-28</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          {/* tabla america libre domingo */}
          <table className="demotable">
            <h3>América Libre Domingo</h3>
            <thead>
              <tr>
                <td colspan="3"></td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="3"></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>Pos</th>
                <th width="210">Equipo</th>
                <th width="50">A</th>
                <th width="50">J</th>
                <th width="50">G</th>
                <th width="50">E</th>
                <th width="50">P</th>
                <th width="50">GF</th>
                <th width="50">DG</th>
                <th width="100">Pts</th>
              </tr>
              <tr>
                <th>1</th>
                <td><img src="./yapeyu.png"></img>Yapeyú FC</td>
                <td>5</td>
                <td>11</td>
                <td>10</td>
                <td>0</td>
                <td>1</td>
                <td>63</td>
                <td>37</td>
                <td>19</td>
              </tr>
              <tr>
                <th>2</th>
                <td><img src="./NIUL.png"></img>Niul</td>
                <td>4</td>
                <td>11</td>
                <td>9</td>
                <td>1</td>
                <td>1</td>
                <td>50</td>
                <td>22</td>
                <td>19</td>
              </tr>
              <tr>
                <th>3</th>
                <td><img src="./firpofc.png"></img>Firpo FC</td>
                <td>-</td>
                <td>11</td>
                <td>9</td>
                <td>0</td>
                <td>2</td>
                <td>49</td>
                <td>26</td>
                <td>18</td>
              </tr>
              <tr>
                <th>4</th>
                <td><img src="./pechepeye.png"></img>Peche Peye (M)</td>
                <td>-</td>
                <td>11</td>
                <td>8</td>
                <td>0</td>
                <td>3</td>
                <td>66</td>
                <td>34</td>
                <td>16</td>
              </tr>
              <tr>
                <th>5</th>
                <td><img src="./ilvicinato.png"></img>Il Vicinato</td>
                <td>-</td>
                <td>11</td>
                <td>6</td>
                <td>1</td>
                <td>4</td>
                <td>41</td>
                <td>14</td>
                <td>13</td>
              </tr>
              <tr>
                <th>6</th>
                <td><img src="./tallerismo.png"></img>Tallerismo T</td>
                <td>-</td>
                <td>11</td>
                <td>5</td>
                <td>0</td>
                <td>6</td>
                <td>32</td>
                <td>-19</td>
                <td>10</td>
              </tr>
              <tr>
                <th>7</th>
                <td><img src="./chavales.png"></img>Los Chavales FC</td>
                <td>-</td>
                <td>11</td>
                <td>4</td>
                <td>0</td>
                <td>7</td>
                <td>35</td>
                <td>-6</td>
                <td>8</td>
              </tr>
              <tr>
                <th>8</th>
                <td><img src="./tallerismo.png"></img>Tallerismo A</td>
                <td>9</td>
                <td>11</td>
                <td>4</td>
                <td>1</td>
                <td>6</td>
                <td>21</td>
                <td>-10</td>
                <td>8</td>
              </tr>
              <tr>
                <th>9</th>
                <td><img src="./lamarcia.png"></img>La Marcia</td>
                <td>-</td>
                <td>11</td>
                <td>3</td>
                <td>0</td>
                <td>8</td>
                <td>28</td>
                <td>-15</td>
                <td>6</td>
              </tr>
              <tr>
                <th>10</th>
                <td><img src="./mauafc.png"></img>Me Anotó Un Amigo FC</td>
                <td>-</td>
                <td>11</td>
                <td>3</td>
                <td>0</td>
                <td>8</td>
                <td>21</td>
                <td>-23</td>
                <td>6</td>
              </tr>
              <tr>
                <th>11</th>
                <td><img src="./ESCUDO-CUERITO.png"></img>Cuerito United</td>
                <td>-</td>
                <td>11</td>
                <td>2</td>
                <td>1</td>
                <td>8</td>
                <td>30</td>
                <td>-33</td>
                <td>5</td>
              </tr>
              <tr>
                <th>12</th>
                <td><img src="./provinciano.png"></img>Club Sportivo Provincianos</td>
                <td>-</td>
                <td>11</td>
                <td>1</td>
                <td>0</td>
                <td>10</td>
                <td>9</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="seccionTablas">
          {/* tabla america jaus fem domingo */}
          <table className="demotable">
            <h3><span>América Jaus Fem Domingo</span></h3>
            <thead>
              <tr>
                <td colspan="3"></td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="3"></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th><span>Pos</span></th>
                <th width="210"><span>Equipo</span></th>
                <th width="50"><span>A</span></th>
                <th width="50"><span>J</span></th>
                <th width="50"><span>G</span></th>
                <th width="50"><span>E</span></th>
                <th width="50"><span>P</span></th>
                <th width="50"><span>GF</span></th>
                <th width="50"><span>DG</span></th>
                <th width="100"><span>Pts</span></th>
              </tr>
              <tr>
                <th>1</th>
                <td><img src="./sinergia.jpg"></img>Sinergia</td>
                <td>-</td>
                <td>11</td>
                <td>9</td>
                <td>2</td>
                <td>0</td>
                <td>66</td>
                <td>45</td>
                <td>20</td>
              </tr>
              <tr>
                <th>2</th>
                <td><img src="./pechepeye.png"></img>Peche Peye (F)</td>
                <td>-</td>
                <td>11</td>
                <td>8</td>
                <td>2</td>
                <td>1</td>
                <td>47</td>
                <td>34</td>
                <td>18</td>
              </tr>
              <tr>
                <th>3</th>
                <td><img src="./carainterna.png"></img>Cara Interna</td>
                <td>-</td>
                <td>11</td>
                <td>6</td>
                <td>1</td>
                <td>4</td>
                <td>30</td>
                <td>0</td>
                <td>13</td>
              </tr>
              <tr>
                <th>4</th>
                <td><img src="toroviejo.png"></img>Toro Viejo FC</td>
                <td>-</td>
                <td>10</td>
                <td>4</td>
                <td>2</td>
                <td>4</td>
                <td>46</td>
                <td>11</td>
                <td>6</td>
              </tr>
              <tr>
                <th>5</th>
                <td><img src="./tararia.png"></img>Tararira</td>
                <td>-</td>
                <td>6</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>12</td>
                <td>-4</td>
                <td>6</td>
              </tr>
              <tr>
                <th>6</th>
                <td><img src="Picas-Fem.png"></img>Picas Fem</td>
                <td>-</td>
                <td>11</td>
                <td>2</td>
                <td>1</td>
                <td>8</td>
                <td>17</td>
                <td>-32</td>
                <td>5</td>
              </tr>
              <tr>
                <th>7</th>
                <td><img src="./pueblofc.png"></img>Pueblo FC</td>
                <td>-</td>
                <td>6</td>
                <td>1</td>
                <td>1</td>
                <td>4</td>
                <td>7</td>
                <td>-15</td>
                <td>3</td>
              </tr>
              <tr>
                <th>8</th>
                <td><img src="./moversemas.png"></img>Moverse Mas</td>
                <td>-</td>
                <td>11</td>
                <td>1</td>
                <td>1</td>
                <td>9</td>
                <td>14</td>
                <td>-35</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          {/* tabla da guia domingo sub23 */}
          <table className="demotable">
            <h3>Da Guia Domingo Sub23</h3>
            <thead>
              <tr>
                <td colspan="3"></td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="3"></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>Pos</th>
                <th width="210">Equipo</th>
                <th width="50">A</th>
                <th width="50">J</th>
                <th width="50">G</th>
                <th width="50">E</th>
                <th width="50">P</th>
                <th width="50">GF</th>
                <th width="50">DG</th>
                <th width="100">Pts</th>
              </tr>
              <tr>
                <th>1</th>
                <td><img src="./tamoactivo.png"></img>Tamo Activo</td>
                <td>-</td>
                <td>8</td>
                <td>7</td>
                <td>0</td>
                <td>1</td>
                <td>33</td>
                <td>16</td>
                <td>14</td>
              </tr>
              <tr>
                <th>2</th>
                <td><img src="./laprome.png"></img>La Prome</td>
                <td>-</td>
                <td>8</td>
                <td>6</td>
                <td>0</td>
                <td>2</td>
                <td>35</td>
                <td>28</td>
                <td>12</td>
              </tr>
              <tr>
                <th>3</th>
                <td><img src="./avellaneda.jpeg"></img>Avellaneda FC</td>
                <td>-</td>
                <td>7</td>
                <td>4</td>
                <td>1</td>
                <td>2</td>
                <td>24</td>
                <td>15</td>
                <td>9</td>
              </tr>
              <tr>
                <th>4</th>
                <td><img src="./amparoneta.png"></img>La Amparoneta</td>
                <td>-</td>
                <td>7</td>
                <td>2</td>
                <td>3</td>
                <td>2</td>
                <td>25</td>
                <td>-6</td>
                <td>7</td>
              </tr>
              <tr>
                <th>5</th>
                <td><img src="./chakarita.png"></img>Chakarita Jrs</td>
                <td>12</td>
                <td>7</td>
                <td>3</td>
                <td>1</td>
                <td>3</td>
                <td>14</td>
                <td>-1</td>
                <td>5</td>
              </tr>
              <tr>
                <th>6</th>
                <td><img src="pura-quimica.png"></img>Pura Quimica</td>
                <td>-</td>
                <td>7</td>
                <td>0</td>
                <td>0</td>
                <td>7</td>
                <td>2</td>
                <td>-18</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="seccionTablas">
          {/* tabla da guia domingo sub20*/}
          <table className="demotable">
            <h3>Da Guia Domingo Sub20</h3>
            <thead>
              <tr>
                <td colspan="3"></td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="3"></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>Pos</th>
                <th width="210">Equipo</th>
                <th width="50">A</th>
                <th width="50">J</th>
                <th width="50">G</th>
                <th width="50">E</th>
                <th width="50">P</th>
                <th width="50">GF</th>
                <th width="50">DG</th>
                <th width="100">Pts</th>
              </tr>
              <tr>
                <th>1</th>
                <td><img src="./pura-quimica.png"></img>Pura Quimica</td>
                <td>3</td>
                <td>41</td>
                <td>27</td>
                <td>3</td>
                <td>11</td>
                <td>120</td>
                <td>37</td>
                <td>57</td>
              </tr>
              <tr>
                <th>2</th>
                <td><img src="./tusa.png"></img>T-USA</td>
                <td>-</td>
                <td>41</td>
                <td>21</td>
                <td>5</td>
                <td>15</td>
                <td>134</td>
                <td>32</td>
                <td>47</td>
              </tr>
            </tbody>
          </table>
          {/* tabla elenia libre lunes*/}
          <table className="demotable">
            <h3>Elenia Libre Lunes</h3>
            <thead>
              <tr>
                <td colspan="3"></td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colspan="3"></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <th>Pos</th>
                <th width="210">Equipo</th>
                <th width="50">A</th>
                <th width="50">J</th>
                <th width="50">G</th>
                <th width="50">E</th>
                <th width="50">P</th>
                <th width="50">GF</th>
                <th width="50">DG</th>
                <th width="100">Pts</th>
              </tr>
              <tr>
                <th>1</th>
                <td><img src="./lapeste.png"></img>La Peste FG</td>
                <td>3</td>
                <td>13</td>
                <td>11</td>
                <td>1</td>
                <td>1</td>
                <td>72</td>
                <td>48</td>
                <td>23</td>
              </tr>
              <tr>
                <th>2</th>
                <td><img src="./resak.png"></img>Resa-K</td>
                <td>3</td>
                <td>13</td>
                <td>9</td>
                <td>1</td>
                <td>3</td>
                <td>61</td>
                <td>27</td>
                <td>19</td>
              </tr>
              <tr>
                <th>3</th>
                <td><img src="./lagranjafc.png"></img>La Granja</td>
                <td>-</td>
                <td>13</td>
                <td>8</td>
                <td>1</td>
                <td>4</td>
                <td>71</td>
                <td>22</td>
                <td>17</td>
              </tr>
              <tr>
                <th>4</th>
                <td><img src="./realpuey.png"></img>Real Pueyrredon FC</td>
                <td>3</td>
                <td>13</td>
                <td>6</td>
                <td>2</td>
                <td>5</td>
                <td>56</td>
                <td>13</td>
                <td>14</td>
              </tr>
              <tr>
                <th>5</th>
                <td><img src="./leicester.png"></img>Leicester</td>
                <td>3</td>
                <td>13</td>
                <td>6</td>
                <td>2</td>
                <td>5</td>
                <td>48</td>
                <td>11</td>
                <td>14</td>
              </tr>
              <tr>
                <th>6</th>
                <td><img src="./celtadevino.png"></img>Celta de Vino</td>
                <td>-</td>
                <td>13</td>
                <td>7</td>
                <td>0</td>
                <td>6</td>
                <td>55</td>
                <td>10</td>
                <td>14</td>
              </tr>
              <tr>
                <th>7</th>
                <td><img src="./galacticos.jpeg"></img>Galácticos FC</td>
                <td>7</td>
                <td>13</td>
                <td>9</td>
                <td>0</td>
                <td>4</td>
                <td>59</td>
                <td>27</td>
                <td>13</td>
              </tr>
              <tr>
                <th>8</th>
                <td><img src="./escudodeportivolatala.png"></img>Deportivo La Tala</td>
                <td>3</td>
                <td>13</td>
                <td>6</td>
                <td>0</td>
                <td>7</td>
                <td>46</td>
                <td>-10</td>
                <td>12</td>
              </tr>
              <tr>
                <th>9</th>
                <td><img src="./lateoria.png"></img>La Teoría</td>
                <td>3</td>
                <td>12</td>
                <td>4</td>
                <td>3</td>
                <td>5</td>
                <td>39</td>
                <td>-12</td>
                <td>11</td>
              </tr>
              <tr>
                <th>10</th>
                <td><img src="./elbajo.png"></img>El Bajo (LP)</td>
                <td>-</td>
                <td>12</td>
                <td>3</td>
                <td>1</td>
                <td>8</td>
                <td>25</td>
                <td>-19</td>
                <td>7</td>
              </tr>
              <tr>
                <th>11</th>
                <td><img src="./imprevisto.png"></img>Imprevisto</td>
                <td>4</td>
                <td>13</td>
                <td>2</td>
                <td>1</td>
                <td>10</td>
                <td>33</td>
                <td>-25</td>
                <td>5</td>
              </tr>
              <tr>
                <th>12</th>
                <td><img src="./pura-quimica.png"></img>Les Blues AD</td>
                <td>-</td>
                <td>13</td>
                <td>8</td>
                <td>2</td>
                <td>3</td>
                <td>0</td>
                <td>0</td>
                <td>4</td>
              </tr>
              <tr>
                <th>13</th>
                <td><img src="./escabieta.png"></img>La Escabieta</td>
                <td>-</td>
                <td>13</td>
                <td>2</td>
                <td>0</td>
                <td>11</td>
                <td>25</td>
                <td>-25</td>
                <td>4</td>
              </tr>
              <tr>
                <th>14</th>
                <td><img src="./toronto.png"></img>Toronto FC</td>
                <td>-</td>
                <td>13</td>
                <td>2</td>
                <td>0</td>
                <td>11</td>
                <td>25</td>
                <td>-74</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="franjaTablas"></div>
    </div>
  );
}
