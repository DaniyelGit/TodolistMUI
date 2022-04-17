import {combineReducers, createStore} from "redux";
import {todolistReducer} from "./reducers/todolist/TodolistReducer";


export type rootStoreType = ReturnType<typeof rootStore>;

export const rootStore = combineReducers({
    todolist: todolistReducer,
});

export const state = createStore(rootStore);

// @ts-ignore
window.store = state;