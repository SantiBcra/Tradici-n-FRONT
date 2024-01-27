import { fetchData } from "../data/data"
import Card from "./card";
import { useRouter } from 'next/router'

import styles from './admin.module.css';

export default async function Page(){
   
  
const data = await fetchData()

// var diario = 0
// // diario += data.map(objeto => objeto.pago).reduce((total, pago) => total + pago, 0);
// diario += data.map(objeto => parseInt(objeto.pago, 10)).reduce((total, pago) => total + pago, 0);



interface Corte {
  // Define las propiedades de 'promo' aquí.
  // Por ejemplo:
  id: string;
  peluquero: string;
  pago: string;
  metodo: string;
  fecha: string;
}



    return (


        <div className="contenedor">
        <h2>Administracion</h2>

      <div className={styles.tableContainer}>
        <table>
              <thead>
                  <tr>
                      <th>Peluquero</th>
                      <th>Valor</th>
                      <th>Metodo de Pago</th>
                      <th>Fecha de Realizacion </th>
                      
                  </tr>
              </thead>
              <tbody>


              {data.map((corte: Corte) => (
              
              <Card  key={corte.id} corte={corte} />
              
              ))
              
            
              }

            </tbody>
    </table>
  </div>



        </div>
    )
    
}






 