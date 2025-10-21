const API_URL = 'https://petsitting-server.onrender.com/api'

// Función para calificar un servicio
export const calificarServicio = async (idServicio, calificacion) => {
  try {
    const response = await fetch(`${API_URL}/servicios/${idServicio}/calificar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ calificacion }),
    });

    if (!response.ok) {
      throw new Error('Error al calificar el servicio');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al calificar el servicio:', error);
    throw error;
  }
};
