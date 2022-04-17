import {filterType} from "./TodolistReducer";

export enum ACTIONS_TYPE_TODOLIST {
    ADD_TODOLIST = 'ADD_TODOLIST',
    REMOVE_TODOLIST = 'REMOVE_TODOLIST',
    CHANGE_TITLE_TODOLIST = 'CHANGE_TITLE_TODOLIST',
    CHANGE_FILTER_TODOLIST = 'CHANGE_FILTER_TODOLIST',
}


export const addTodolistAC = (title: string): addTodolistType => {
    return {
        type: ACTIONS_TYPE_TODOLIST.ADD_TODOLIST,
        title,
    } as const
}

export const removeTodolistAC = (todoID: string): removeTodolistType => {
    return {
        type: ACTIONS_TYPE_TODOLIST.REMOVE_TODOLIST,
        todoID,
    } as const
}

export const changeTitleTodolistAC = (todoID: string, newTitle: string): changeTitleTodolistType => {
    return {
        type: ACTIONS_TYPE_TODOLIST.CHANGE_TITLE_TODOLIST,
        todoID,
        newTitle,
    } as const
}

export const changeFilterTodolistAC = (todoID: string, valueFilter: filterType): changeFilterTodolistType => {
    return {
        type: ACTIONS_TYPE_TODOLIST.CHANGE_FILTER_TODOLIST,
        todoID,
        valueFilter,
    } as const
}


type addTodolistType = {
    type: ACTIONS_TYPE_TODOLIST.ADD_TODOLIST
    title: string
}
type removeTodolistType = {
    type: ACTIONS_TYPE_TODOLIST.REMOVE_TODOLIST,
    todoID: string,
}
type changeTitleTodolistType = {
    type: ACTIONS_TYPE_TODOLIST.CHANGE_TITLE_TODOLIST,
    todoID: string,
    newTitle: string,
}
type changeFilterTodolistType = {
    type: ACTIONS_TYPE_TODOLIST.CHANGE_FILTER_TODOLIST,
    todoID: string,
    valueFilter: filterType,
}

export type ActionsTypeTodolist = addTodolistType
    | removeTodolistType
    | changeTitleTodolistType
    | changeFilterTodolistType;