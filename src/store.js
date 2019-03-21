import React from 'react';

export const initialState = {data: [12,23,34]};

export const reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return initialState;
        case "add": {
            state.data.push(action.value);
            return {data: state.data};
        }
        default:
            return state;   
    }
}

export const Context = React.createContext();