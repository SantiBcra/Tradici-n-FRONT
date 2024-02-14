/* eslint-disable react/prop-types */

import styles from './admin.module.css';

const FieldCard = ({corte} : {corte:any}) => {
  
  return (
    
    <tr className="carta"  key={corte.id}>
        
        <td className='edit'>$ {corte.pago}</td>
        <td >- {corte.metodo}</td>
        <td>{corte.fecha} {corte.time}</td>
        
       
    </tr>
    
  );
};

export default FieldCard;