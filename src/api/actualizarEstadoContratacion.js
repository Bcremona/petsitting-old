const API_URL = 'https://petsitting-server.onrender.com/api'

// Función para actualizar el estado de una contratación
export const actualizarEstadoContratacion = async (contratacionId, nuevoEstado) => {
  try {
    const response = await fetch(`${API_URL}/contrataciones/${contratacionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nuevoEstado }),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el estado de la contratación');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al actualizar el estado de la contratación:', error);
    throw error;
  }
};
