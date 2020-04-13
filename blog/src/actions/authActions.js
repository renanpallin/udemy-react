import { delay } from './postActions';
export const DO_LOGIN = '@auth/DO_LOGIN';
export const login = ({ email, password }) => (dispatch) => {
  return delay(500).then(() => {
    const token = '123fake321';
    const name = 'Renan';
    dispatch({
      type: DO_LOGIN,
      token,
      name,
    });

    return { error: true, errorMessage: 'Opppss' };
  });
};

// export const DO_SUBSCRIBE = '@auth/DO_SUBSCRIBE';
export const subscribe = ({ email, password, name }) => (dispatch) => {
  return delay(500).then(() => {
    const token = '123fake321';
    const name = 'Renan';
    dispatch({
      type: DO_LOGIN,
      token,
      name,
    });
    return { error: true, errorMessage: 'Opppss' };
  });
};

export const DO_LOGOUT = '@auth/DO_LOGOUT';
export const logout = () => ({
  type: DO_LOGOUT,
});
