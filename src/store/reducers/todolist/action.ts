import {filterType} from "./TodolistReducer";
import {v1} from "uuid";

export const addTodolistAC = (title: string): addTodolistType => {
    return {
        type: 'ADD_TODOLIST',
        title,
        todoID: v1(),
    } as const
}

export const removeTodolistAC = (todoID: string): removeTodolistType => {
    return {
        type: 'REMOVE_TODOLIST',
        todoID,
    } as const
}

export const changeTitleTodolistAC = (todoID: string, newTitle: string): changeTitleTodolistType => {
    return {
        type: 'CHANGE_TITLE_TODOLIST',
        todoID,
        newTitle,
    } as const
}

export const changeFilterTodolistAC = (todoID: string, valueFilter: filterType): changeFilterTodolistType => {
    return {
        type: 'CHANGE_FILTER_TODOLIST',
        todoID,
        valueFilter,
    } as const
}


export type addTodolistType = {
    type: 'ADD_TODOLIST'
    title: string
    todoID: string
}
export type removeTodolistType = {
    type: 'REMOVE_TODOLIST',
    todoID: string,
}
export type changeTitleTodolistType = {
    type: 'CHANGE_TITLE_TODOLIST',
    todoID: string,
    newTitle: string,
}
export type changeFilterTodolistType = {
    type: 'CHANGE_FILTER_TODOLIST',
    todoID: string,
    valueFilter: filterType,
}

export type ActionsTypeTodolist = addTodolistType
    | removeTodolistType
    | changeTitleTodolistType
    | changeFilterTodolistType;