import {rootStoreType} from "../../state";

export type TaskType = { id: string, title: string, isDone: boolean };

export type initialStateType = {
    [key: string]: Array<TaskType>;
}
const initialState: initialStateType = {};

export const taskReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case '': {
            return state;
        }
        default: {
            return state;
        }
    }
}



export const selectStateTask = (store: rootStoreType) => store.task;