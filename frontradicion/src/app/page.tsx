import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PasswordProtectedButton from "./dashboard/protect"

export default function Home() {

 

  return (
    <div className='botonera'>
      
<Image
      src="/1.jpg"
      width={300}
      height={300}
      alt="Picture of the author"
    /> 
       <Link href="/form">

 <button className='boton'>Ingresar nuevo Dato</button>

       </Link>
     
    
       <PasswordProtectedButton/>

       <Link href="/clientes">
<button className='boton'>Clientes con promo</button>
</Link>


<Link href="/promo">
<button className='boton'>Agregar nuevo cliente</button>
</Link>
    </div>
  )
}


