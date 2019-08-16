const INITIAL_STATE = {
	logged: false,
};
  
export default (state = INITIAL_STATE, action) => {
  
	// console.log('action => ', action)
	// return state;
  
	switch(action.type) {
		case 'SET_LOGGED':
			return { ...state, logged: action.payload };
		case 'LOGOFF_USER':
      return {...state, logged: action.payload || false };
		default:
			return state;
	}
}
  