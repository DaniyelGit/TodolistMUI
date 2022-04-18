import {rootStoreType} from "../../state";
import {v1} from "uuid";
import {ActionsTypeTask} from "./action";

export type TaskType = { id: string, title: string, isDone: boolean };

export type initialStateTaskType = {
    [key: string]: Array<TaskType>;
}
const initialState: initialStateTaskType = {};

export const TaskReducer = (state: initialStateTaskType = initialState, action: ActionsTypeTask): initialStateTaskType => {
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ...state,
                [action.todoID]: [
                    {id: v1(), title: action.title, isDone: false},
                    ...state[action.todoID]
                ]
            };
        }
        case 'REMOVE_TASK': {
            return {
                ...state,
                [action.todoID]: state[action.todoID].filter(t => t.id !== action.taskID)
            }
        }
        case 'CHANGE_TASK_TITLE': {
            return {
                ...state,
                [action.todoID]: state[action.todoID].map(t => t.id === action.taskID ? {...t, title: action.title} : t)
            }
        }
        case 'CHANGE_IS_DONE_TASK': {
            return {
                ...state,
                [action.todoID]: state[action.todoID].map(t => t.id === action.taskID ? {...t, isDone: action.isDone} : t)
            }
        }
        case 'ADD_TODOLIST': {
            return {
                ...state,
                [action.todoID]: [],
            }
        }
        case 'REMOVE_TODOLIST': {
            const copyState = {...state};
            delete  copyState[action.todoID];
            return copyState;
        }
        default: {
            return state;
        }
    }
}



export const selectStateTask = (store: rootStoreType) => store.task;