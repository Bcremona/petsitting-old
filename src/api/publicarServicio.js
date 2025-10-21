const API_URL = 'https://petsitting-server.onrender.com/api' // Asegúrate de que esta URL sea correcta

// Función para publicar un servicio
export const publicarServicio = async (servicio, userId) => {
  try {
    const response = await fetch(`${API_URL}/publicarServicio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...servicio, userId }), // Asegúrate de que el userId esté correctamente agregado
    });

    if (!response.ok) {
      throw new Error('Error al publicar el servicio');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al publicar el servicio:', error.message);
    throw error;
  }
};
