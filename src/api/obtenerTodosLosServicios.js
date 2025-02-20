const API_URL = 'http://localhost:3000/api'; // Reemplaza con la URL de tu API

// Función para obtener todos los servicios
export const obtenerTodosLosServicios = async () => {
  try {
    const response = await fetch(`${API_URL}/obtenerTodosLosServicios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los servicios');
    }

    const data = await response.json();
    return data; // Devuelve la lista de servicios obtenida desde la API
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    throw error;
  }
};
