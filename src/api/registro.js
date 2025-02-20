const API_URL = 'http://localhost:3000/api/registro';

// Funcion Registro 
export const registrarUsuario = async (usuario) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });

  if (!response.ok) throw new Error('Error al registrar el usuario');
  return await response.json();
};