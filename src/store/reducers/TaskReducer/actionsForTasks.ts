import {addTodolistType, removeTodolistType} from "../TodolistReducer/actionsForTodolist";

export const addTaskAC = (todoID: string, title: string): addTaskType => {
    return  {
        type: 'ADD_TASK',
        todoID,
        title,
    } as const
}

export const removeTaskAC = (todoID: string, taskID: string): removeTaskType => {
    return {
        type: 'REMOVE_TASK',
        todoID,
        taskID,
    } as const
}

export const changeTitleTaskAC = (todoID: string, taskID: string, title: string): changeTitleTaskType => {
    return {
        type: 'CHANGE_TASK_TITLE',
        todoID,
        taskID,
        title,
    } as const
}

export const changeIsDoneTaskAC = (todoID: string, taskID: string, isDone: boolean): changeIsDoneTaskType => {
    return {
        type: 'CHANGE_IS_DONE_TASK',
        todoID,
        taskID,
        isDone,
    } as const
}


type addTaskType = {
    type: 'ADD_TASK',
    todoID: string,
    title: string,
}
type changeTitleTaskType = {
    type: 'CHANGE_TASK_TITLE'
    todoID: string,
    taskID: string,
    title: string
}
type changeIsDoneTaskType = {
    type: 'CHANGE_IS_DONE_TASK',
    todoID: string
    taskID: string
    isDone: boolean
}
type removeTaskType = {
    type: 'REMOVE_TASK'
    todoID: string
    taskID: string
}

// Global TYPE for actions TaskReducer
export type ActionsTypeTask = addTodolistType
    | removeTodolistType
    | addTaskType
    | changeTitleTaskType
    | changeIsDoneTaskType
    | removeTaskType;