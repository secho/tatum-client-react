import React from 'react';

export const initialState = {
    value: 0
}

const countReducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "increment":
            return { value: state.value + 1 };
        case "decrement":
            return { value: state.value - 1 }
        default:
            return state;
    }
}

// const count2Reducer = (state, action) => {
//     switch (action.type) {
//         case "reset":
//             return initialState;
//         case "increment":
//             return { value2: state.value2 + 1 };
//         case "decrement":
//             return { value2: state.value2 - 1 }
//         default:
//             return state;
//     }
// }

export const mainReducer = (state, action) => {
    return countReducer(state,action)
}
// export const mainReducer = ({ count, count2 }, action) => {
//     console.log(count);
//     console.log(count2);
//     return {
//         count: countReducer(count, action),
//         count2: count2Reducer(count2, action)
//     }
// }

export const Context = React.createContext();