import {ActionsTypeTodolist} from "./actionsForTodolist";
import {rootStoreType} from "../../state";


export type initialStateTodolistType = todolistType[];

type todolistType = {
    id: string
    title: string
    filter: filterType
};
export type filterType = 'all' | 'active' | 'completed';

const initialState: initialStateTodolistType = []


export const TodolistReducer = (state: initialStateTodolistType = initialState, action: ActionsTypeTodolist): initialStateTodolistType => {
    switch (action.type) {
        case 'ADD_TODOLIST': {
            return [{id: action.todoID, title: action.title, filter: 'all'}, ...state];
        }
        case 'REMOVE_TODOLIST': {
            return state.filter(tl => tl.id !== action.todoID);
        }
        case 'CHANGE_TITLE_TODOLIST': {
            return state.map(tl => tl.id === action.todoID ? {...tl, title: action.newTitle} : tl);
        }
        case 'CHANGE_FILTER_TODOLIST': {
            return state.map(tl => tl.id === action.todoID ? {...tl, filter: action.valueFilter} : tl);
        }
        default: {
            return state
        }
    }
}

export const selectStateTodolist = (store: rootStoreType) => store.todolist;
