/* eslint-disable react/prop-types */
"use client"
import axios from "axios"
import Swal from "sweetalert2";

const Kard = (  {promo} : {promo:any} ) => {
  
const nombre = promo.id


  return (
    
    <tr className="carta"  key={promo.id}>
    <td>{promo.client}</td>
    <td>{promo.initialDay}</td>
    <td>{promo.dates}</td>
    <td onClick={() => {axios.delete(`https://server-tradicion.onrender.com/promo/${nombre}`)
  Swal.fire({
    title: "Listo!",
    text: "El corte sera restado en breve!",
    
    icon: "success"
  });
  }} className="botoncito" > Restar uno </td>
  
    </tr>
    
  );
};

export default Kard;


