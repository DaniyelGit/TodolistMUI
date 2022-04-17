import {ACTIONS_TYPE_TODOLIST, ActionsTypeTodolist} from "./action";
import {rootStoreType} from "../../state";
import {v1} from "uuid";

export type initialStateType = todolistType[];
type todolistType = {
    id: string
    title: string
    filter: filterType
};
export type filterType = 'all' | 'active' | 'completed';

const initialState: initialStateType = [];

export const todolistReducer = (state: initialStateType = initialState, action: ActionsTypeTodolist): initialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE_TODOLIST.ADD_TODOLIST: {
            return [{id: v1(), title: action.title, filter: 'all'}, ...state];
        }
        case ACTIONS_TYPE_TODOLIST.REMOVE_TODOLIST: {
            return state.filter(tl => tl.id !== action.todoID);
        }
        case ACTIONS_TYPE_TODOLIST.CHANGE_TITLE_TODOLIST: {
            return state.map(tl => tl.id === action.todoID ? {...tl, title: action.newTitle} : tl);
        }
        case ACTIONS_TYPE_TODOLIST.CHANGE_FILTER_TODOLIST: {
            return state.map(tl => tl.id === action.todoID ? {...tl, filter: action.valueFilter} : tl);
        }
        default: {
            return state
        }
    }
}

export const selectTodolistState = (store: rootStoreType) => store.todolist;
