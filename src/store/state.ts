import {combineReducers, createStore} from "redux";

import {TodolistReducer} from "./reducers/TodolistReducer/TodolistReducer";
import {TaskReducer} from "./reducers/TaskReducer/TaskReducer";



export type rootStoreType = ReturnType<typeof rootStore>;

export const rootStore = combineReducers({
    todolist: TodolistReducer,
    task: TaskReducer,
});

export const state = createStore(rootStore);

// @ts-ignore
const store = window.store = state;

console.log(store.getState())