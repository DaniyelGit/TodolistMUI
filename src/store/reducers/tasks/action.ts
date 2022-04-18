import {addTodolistType, removeTodolistType} from "../todolist/action";

export const addTaskAC = (todoID: string, title: string): addTaskType => {
    return  {
        type: 'ADD_TASK',
        todoID,
        title,
    }
}


type addTaskType = {
    type: 'ADD_TASK',
    todoID: string,
    title: string,
}


export type ActionsTypeTask = addTodolistType | removeTodolistType | addTaskType;