import { fetchData } from "../data/data"
import Card from "./card";
import { useRouter } from 'next/router'

import styles from './admin.module.css';

export default async function Page(){

  interface Corte {
  // Define las propiedades de 'promo' aquí.
  // Por ejemplo:
  id: string;
  peluquero: string;
  pago: string;
  metodo: string;
  fecha: string;
}


  
const data = await fetchData()

const data1 = await data.filter((corte:any) => corte.peluquero == 1) 
const data2 = await data.filter((corte:any) => corte.peluquero == 2) 
const data3 = await data.filter((corte:any) => corte.peluquero == 3) 
// var diario = 0
// // diario += data.map(objeto => objeto.pago).reduce((total, pago) => total + pago, 0);
// diario += data.map(objeto => parseInt(objeto.pago, 10)).reduce((total, pago) => total + pago, 0);





    return (


        <div className="contenedor">
   



      <div className={styles.tableContainer}>
      <h2 className="ip1">Peluquero I</h2>
        <table>
              <thead>
                  <tr className="op1">
                     
                      <th>Valor</th>
                      <th>Metodo de Pago</th>
                      <th>Fecha de Realizacion </th>
                      
                  </tr>
              </thead>
              <tbody>

              {data1.map((corte: Corte) => (
              
              <Card  key={corte.id} corte={corte} />
              
              ))}
            </tbody>
    </table>
  </div>










  <div className={styles.tableContainer}>
  <h2 className="ip1">Peluquero II</h2>
        <table>
        
              <thead>
                  <tr className="op1">
                      
                      <th>Valor</th>
                      <th>Metodo de Pago</th>
                      <th>Fecha de Realizacion </th>
                      
                  </tr>
              </thead>
              <tbody>


              {data2.map((corte: Corte) => (
              
              <Card  key={corte.id} corte={corte} />
              
              ))
              
            
              }

            </tbody>
    </table>
  </div>




<div className={styles.tableContainer}>
<h2 className="ip1">Peluquero III</h2>
        <table>
      
              <thead>
                  <tr className="op1">
                      
                      <th>Valor</th>
                      <th>Metodo de Pago</th>
                      <th>Fecha de Realizacion </th>
                      
                  </tr>
              </thead>
              <tbody>


              {data3.map((corte: Corte) => (
              
              <Card  key={corte.id} corte={corte} />
              
              ))
              
            
              }

            </tbody>
    </table>
  </div>





        </div>
    )
    
}






 