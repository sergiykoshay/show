const NS = '@hnReader/app';

export const actionTypes = {
    SET_THEME: `${NS}/SET_THEME`,
};

const actions = { 
    setTheme: (payLoad = {}) => ({ type: actionTypes.SET_THEME, payLoad}),
};

export default actions;