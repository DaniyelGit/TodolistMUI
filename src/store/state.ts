import {combineReducers, createStore} from "redux";

import {TodolistReducer} from "./reducers/todolist/TodolistReducer";
import {TaskReducer} from "./reducers/tasks/TaskReducer";



export type rootStoreType = ReturnType<typeof rootStore>;

export const rootStore = combineReducers({
    todolist: TodolistReducer,
    task: TaskReducer,
});

export const state = createStore(rootStore);

// @ts-ignore
window.store = state;