const API_URL = 'http://localhost:3000/api';

// Función para obtener comentarios por servicio
export const obtenerComentariosPorServicio = async (idServicio) => {
  try {
    const response = await fetch(`${API_URL}/comentarios/servicio/${idServicio}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los comentarios');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los comentarios:', error);
    throw error;
  }
};
