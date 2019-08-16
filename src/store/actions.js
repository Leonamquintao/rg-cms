export const setLogged = (val) => {
	return {
		type: 'SET_LOGGED',
		payload: val
	}
};

export const logoff = (val) => {
  return {
    type: 'LOGOFF_USER',
    payload: val
  }
};
