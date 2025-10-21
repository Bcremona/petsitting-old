const API_URL = 'https://petsitting-server.onrender.com/api' // Reemplaza con la URL de tu API

export const crearComentario = async (idServicio, comentario) => {
  try {
    const response = await fetch(`${API_URL}/servicios/${idServicio}/comentarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comentario),
    });

    if (!response.ok) {
      throw new Error('Error al crear el comentario');
    }

    const data = await response.json();
    return data; // Devuelve la respuesta de la API
  } catch (error) {
    console.error('Error al crear el comentario:', error);
    throw error;
  }
};
