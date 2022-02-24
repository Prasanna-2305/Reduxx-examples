const initialState = 0;

const convertNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state+action.times ;
        case "DECREMENT": return state-1;
        default : return state;
    }
}

export default convertNumber;