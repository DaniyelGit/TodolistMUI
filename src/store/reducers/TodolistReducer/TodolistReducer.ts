import {ActionsTypeTodolist} from "./action";
import {rootStoreType} from "../../state";


export type initialStateTodolistType = {
    todolist: todolistType[];
};
type todolistType = {
    id: string
    title: string
    filter: filterType
};
export type filterType = 'all' | 'active' | 'completed';

const initialState: initialStateTodolistType = {
    todolist: []
};

export const TodolistReducer = (state: initialStateTodolistType = initialState, action: ActionsTypeTodolist): initialStateTodolistType => {
    switch (action.type) {
        case 'ADD_TODOLIST': {
            return {
                ...state,
                todolist: [{id: action.todoID, title: action.title, filter: 'all'}, ...state.todolist]
            };
        }
        case 'REMOVE_TODOLIST': {
            return {
                ...state,
                todolist: state.todolist.filter(tl => tl.id !== action.todoID)
            };
        }
        case 'CHANGE_TITLE_TODOLIST': {
            return {
                ...state,
                todolist: state.todolist.map(tl => tl.id === action.todoID ? {...tl, title: action.newTitle} : tl)
            }
        }
        case 'CHANGE_FILTER_TODOLIST': {
            return {
                ...state,
                todolist: state.todolist.map(tl => tl.id === action.todoID ? {...tl, filter: action.valueFilter} : tl)
            };
        }
        default: {
            return state
        }
    }
}

export const selectStateTodolist = (store: rootStoreType) => store.todolist;
