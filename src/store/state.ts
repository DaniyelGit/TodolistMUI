import {combineReducers, createStore} from "redux";

import {todolistReducer} from "./reducers/todolist/TodolistReducer";
import {taskReducer} from "./reducers/tasks/taskReducer";



export type rootStoreType = ReturnType<typeof rootStore>;

export const rootStore = combineReducers({
    todolist: todolistReducer,
    task: taskReducer,
});

export const state = createStore(rootStore);

// @ts-ignore
window.store = state;