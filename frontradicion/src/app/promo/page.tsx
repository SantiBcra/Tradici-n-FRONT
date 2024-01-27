"use client"
import {useForm, SubmitHandler} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { userSchema } from "@/validations/userSchema"
import Image from 'next/image'
import axios from "axios"
import Swal from "sweetalert2"



export default function Form(){

    const{register, handleSubmit, watch, formState:{errors}} = useForm()
    {resolver: zodResolver(userSchema)}
    
    return (

        <div className="contenedor" >


            <form className="form" onSubmit={handleSubmit(data => {axios.post("http://localhost:3001/promo/",data)
        
        Swal.fire({
            title: "Listo!",
            text: "El nuevo cliente aparecera en breve!",
            
            icon: "success"
          });
        })}>





                            {/* TEXT INPUT PAGO  */}
            <label htmlFor="client">Nombre y Apellido</label>
            <input className="seleccion" placeholder="cliente"  type="text" id ="client" {...register("client")} />



           

    

            




            <button  className="guardo" type="submit"> Guardar</button>

            

            </form>

        {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}










{/* 
        <table>
              <thead>
                  <tr>
                      <th>Peluquero</th>
                      <th>Valor</th>
                      <th>Metodo de Pago</th>
                      <th>Fecha </th>
                      
                  </tr>
              </thead>
              
    </table> */}













        </div>


    )
        
        
    }