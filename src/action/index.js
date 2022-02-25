import axios from 'axios';
export const plusNumber = (num) => {
    return {
        type: "INCREMENT",
        times: num
    }
}

export const minusNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const fetchUserRequest = () => {
    return {
        type: "FETCHUSERREQUEST"
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: "FETCHUSERSUCCESS",
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: "FETCHUSERFAILURE",
        payload: error
    }
}

export const userFetch = () => {
    return async dispatch => {
        try {
            dispatch(fetchUserRequest);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(fetchUserSuccess(response.data));
            console.log(response.data);
        }
        catch (error) {
            dispatch(fetchUserFailure(error.message));
        }
    }
}

