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


            <form className="form" onSubmit={handleSubmit(data => {axios.post("http://localhost:3001/admin/haircut",data)
            Swal.fire({
                title: "Excelente!",
                text: "El nuevo corte fue agregado!",
                
                icon: "success"
              });
        })
        
        
        }>




                            {/* SELECT DE PELUQUERO  */}
            <label htmlFor="peluquero">Peluquero</label>
            <select className="seleccion" {...register("peluquero")}>
            <option value="no registrado">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>



                            {/* TEXT INPUT PAGO  */}
            <label htmlFor="pago">Pago</label>
            <input className="seleccionn" placeholder="$$$"  type="number" id ="pago" {...register("pago")} />



                            {/* SELECT METODO  */}
            <label htmlFor="metodo">Metodo de Pago</label>
            <select className="seleccion" {...register("metodo")}>
            <option value="no registrado">-</option>
                <option value="efectivo">Efectivo</option>
                <option value="transferencia">Transferencia</option>
                <option value="débito">Débito</option>
                <option value="crédito">Crédito</option>
            </select>


                         

           



            <button className="guardo" type="submit">Guardar</button>

            

            </form>

        {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}







        </div>


    )
        
        
    }