import {z}from "zod"


const barbers = ["pepe", "juan", "Yair"] as const;

export const userSchema= z.object({


    peluquero: z.enum(barbers),

    pago: z.string().refine(pago=>  !isNaN(parseFloat(pago)),
    {message: "el pago debe ser numerico",})



})


