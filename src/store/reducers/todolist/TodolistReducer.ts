import {ActionsTypeTodolist} from "./action";
import {rootStoreType} from "../../state";

export type initialStateType = todolistType[];
type todolistType = {
    id: string
    title: string
    filter: filterType
};
type filterType = 'all' | 'active' | 'completed';

const initialState: initialStateType = [];

export const todolistReducer = (state: initialStateType = initialState, action: ActionsTypeTodolist): initialStateType => {
    switch (action.type) {
        case '' : {
            return state
        }
        default: {
            return state
        }
    }
}

export const selectTodolistState = (store: rootStoreType) => store.todolist;
