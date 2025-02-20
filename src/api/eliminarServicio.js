// api/eliminarServicio.js
const API_URL = 'http://localhost:3000/api';

export const eliminarServicio = async (idServicio) => {
  try {
    const response = await fetch(`${API_URL}/eliminarServicio/${idServicio}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el servicio');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    throw error;
  }
};
