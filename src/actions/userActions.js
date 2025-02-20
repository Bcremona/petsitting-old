export const LOGUEARSE = 'LOGUEARSE';
export const DESLOGUEARSE = 'DESLOGUEARSE';
export const ACTUALIZAR_PERFIL = 'ACTUALIZAR_PERFIL';

export const loguearse = (id, rol) => ({
  type: LOGUEARSE,
  payload: { id, rol },
});

export const desloguearse = () => ({
  type: DESLOGUEARSE,
});