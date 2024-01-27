"use client"
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'


const PasswordProtectedButton = () => {
  const router = useRouter()

  const [password, setPassword] = useState('');
  const correctPassword = 'tucontraseña'; // Cambia 'tucontraseña' por la contraseña que desees

  const handleButtonClick = () => {
    if (password === correctPassword) {
      router.push('/dashboard')
    
    } else {

      Swal.fire({
        title: "Error!",
        text: 'Contraseña incorrecta. Acción bloqueada.',
        
        icon: "error"
      });
     
    }
  };

  return (
    <button className='boton'>
      <label>Administracion</label>
        <input className='put'
          type="password"
          value={password}
          placeholder="    Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='ultimoboton' onClick={handleButtonClick}>Acción Protegida</div>
      
      
    </button>
  );
};

export default PasswordProtectedButton;
