const API_URL = 'https://petsitting-server.onrender.com/api'

// Función para obtener las contrataciones por id de prestador
export const obtenerContratacionesPorPrestador = async (idPrestador) => {
  try {
    const response = await fetch(`${API_URL}/contrataciones?prestadorId=${idPrestador}`);

    if (!response.ok) {
      throw new Error('Error al obtener las contrataciones del prestador');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al obtener las contrataciones del prestador:', error);
    throw error;
  }
};
