const iniState = {
    authError: null
}

const authReducer = (state = iniState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('Login Error');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        default:
            return state;
    }
}

export default authReducer;