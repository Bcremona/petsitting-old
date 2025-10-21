// api/editarServicio.js
const API_URL = 'https://petsitting-server.onrender.com/api'

export const editarServicio = async (idServicio, servicioData) => {
  try {
    const response = await fetch(`${API_URL}/editarServicio/${idServicio}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(servicioData)
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el servicio');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al actualizar el servicio:', error);
    throw error;
  }
};
