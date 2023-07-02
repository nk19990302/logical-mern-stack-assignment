import React, { createContext, useReducer, ReactNode } from "react";
import { Todo } from "../services/TodoService";

export const actions = {
    DELETE: "DELETE",
    UPDATE: "UPDATE",
    ADD: "ADD",
    GET: "GET",
    ERROR: "ERROR"
};

type Action = {
    type: string;
    payload: any;
}

type StateType = { todo: Todo[], error: string }

const initialState: StateType = {
    todo: [],
    error: ""
};

const AppContext = createContext<{
    state: StateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: StateType, action: Action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case actions.ADD:
            return {
                ...state,
                todo: [...state.todo, action.payload],
            };
        case actions.DELETE:
            return {
                ...state,
                todo: state.todo.filter((it) => it._id !== action.payload),
            };
        case actions.UPDATE:
            return {
                ...state,
                todo: state.todo.map((it) =>
                    it._id === action.payload._id ? action.payload : it
                ),
            };
        case actions.GET:
            return {
                ...state,
                todo: [...action.payload],
            };
        case actions.ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};


const AppProvider: React.FC<{ children: ReactNode }> = ({ children }): React.ReactElement => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext };
