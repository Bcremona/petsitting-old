// api/buscarServicios.js
const API_URL = 'http://localhost:3000/api';

export const buscarServicios = async (query) => {
  try {
    const response = await fetch(`${API_URL}/buscar?query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Error al buscar servicios');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al buscar servicios:', error);
    throw error;
  }
};
