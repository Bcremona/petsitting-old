import { LOGUEARSE, DESLOGUEARSE } from '../actions/userActions';

const initialState = {
  usuario: null,
};

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGUEARSE:
      return {
        ...state,
        usuario: {
          id: action.payload.id,
          rol: action.payload.rol,
        },
      };
    case DESLOGUEARSE:
      return {
        ...state,
        usuario: null,
      };
    default:
      return state;
  }
};

export default usuarioReducer;