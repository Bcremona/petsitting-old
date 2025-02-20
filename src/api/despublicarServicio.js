// api/despublicarServicio.js
const API_URL = 'http://localhost:3000/api';

export const despublicarServicio = async (idServicio) => {
  try {
    const response = await fetch(`${API_URL}/despublicarServicio/${idServicio}`, {
      method: 'PUT'
    });

    if (!response.ok) {
      throw new Error('Error al despublicar el servicio');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al despublicar el servicio:', error);
    throw error;
  }
};
