import {
    UPDATE_USER_FIELD,
    REGISTER_NEW_USER,
    REGISTER_NEW_USER_SUCCESS,
    REGISTER_NEW_USER_ERROR
} from "containers/LoginSignupPage/constants";

export function updateUserField(field, value) {
    return {
        type: UPDATE_USER_FIELD,
        field,
        value
    };
}

export function registerUser() {
    return {
        type: REGISTER_NEW_USER
    }
}

export function registerUserSuccess(user) {
    return {
        type: REGISTER_NEW_USER_SUCCESS,
        user
    }
}

export function registerUserError(error) {
    console.error(error);
    return {
        type: REGISTER_NEW_USER_ERROR,
        error: error.message
    }
}