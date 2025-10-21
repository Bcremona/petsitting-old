// api/crearContratacion.js
const API_URL = 'https://petsitting-server.onrender.com/api' // Reemplaza con la URL de tu API

// Función para crear una contratación
export const crearContratacion = async (contratacion) => {
  try {
    const response = await fetch(`${API_URL}/contrataciones`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contratacion),
    });

    if (!response.ok) {
      throw new Error('Error al crear la contratación');
    }

    const data = await response.json();
    return data; // Devuelve el objeto de la contratación creada desde la API
  } catch (error) {
    console.error('Error al crear la contratación:', error);
    throw error;
  }
};
