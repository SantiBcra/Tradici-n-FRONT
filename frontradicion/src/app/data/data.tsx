

export async function fetchData() {
    
    try{

        const url = `${process.env.URL_DB}`
            const datos =  await fetch(url, {next: {revalidate:60}})
           const respuesta = await datos.json()

           console.log(respuesta)
           return respuesta
    }

    catch(error){
console.error("Database error",error)
throw new Error("fail to fech")
    }
}

export async function fetchPromos() {
    
    try{

        const url = `${process.env.URLL_DB}`
            const datos =  await fetch(url, {next: {revalidate:60}})
           const respuesta = await datos.json()

           console.log(respuesta)
           return respuesta
    }

    catch(error){
console.error("Database error",error)
throw new Error("fail to fech")
    }
}


