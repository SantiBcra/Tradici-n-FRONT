import { fetchPromos } from "../data/data"
import Kard from "./kard"
import styles from '../dashboard/admin.module.css';
export default async function Page(){
   
  
const data = await fetchPromos()

interface Promo {
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
        <h2>Clientes con Promo</h2>

        <div className={styles.tableContainer}>
       
       
          <table>
              <thead>
                  <tr>
                      <th>Cliente </th>
                      <th>Fecha de inicio de la Promo</th>
                      
                      <th>Cortes Restantes</th>
                      
                  </tr>
              </thead>
              <tbody>

              {data.map((promo : Promo) => (
              
              <Kard  key={promo.id} promo={promo} />
              
              
              ))}
              
            </tbody>

            


    </table>


          
            
    
  </div>




        </div>
    )
    
}






 