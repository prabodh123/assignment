import { SET_LOGIN_DETAILS } from '../actions/loginAction';

let initialState = { UserResponse: [] };

const loginReducer = (state = initialState, action) => {
    console.log("type",initialState)
    switch (action.type) {
        case SET_LOGIN_DETAILS:
            return {
                ...state,
                UserResponse: action.UserResponse
            }
    }
    return state;
};

export default loginReducer;
