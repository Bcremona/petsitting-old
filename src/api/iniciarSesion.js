const API_URL = 'https://petsitting-server.onrender.com/api'

// Función para iniciar sesión y obtener rol e ID del usuario
export const iniciarSesion = async (credenciales) => {
  try {
    const response = await fetch(`${API_URL}/iniciarSesion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciales),
    });

    console.log(credenciales);

    // Verificar si la respuesta del servidor es exitosa
    if (!response.ok) {
      // Manejar errores HTTP
      throw new Error(response.statusText); // Captura el mensaje de error del servidor
    }

    // Convertir la respuesta a JSON
    const data = await response.json();

    // Verificar que la respuesta del servidor contiene el rol e ID del usuario
    if (!data || !data.id || !data.rol) {
      throw new Error('Respuesta del servidor incompleta');
    }

    return data; // Devolver el objeto completo con rol e ID del usuario
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    throw error; // Relanza el error para manejarlo en un nivel superior si es necesario
  }
};

