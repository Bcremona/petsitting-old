const API_URL = 'http://localhost:3000/api';

// Función para obtener un servicio por ID
export const obtenerServicioPorId = async (idServicio) => {
  try {
    const response = await fetch(`${API_URL}/servicios/${idServicio}`);
    if (!response.ok) {
      throw new Error('Error al obtener el servicio');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener el servicio:', error);
    throw error;
  }
};
