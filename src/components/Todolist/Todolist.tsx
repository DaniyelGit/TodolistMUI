import React, {ChangeEvent} from 'react';
import s from './Todolist.module.css';
import {useDispatch, useSelector} from "react-redux";
import {rootStoreType} from "../../store/state";
import {initialStateTaskType, selectStateTask} from "../../store/reducers/TaskReducer/TaskReducer";
import {Dispatch} from "redux";
import {EditSpan} from "../EditableSpan/EditSpan";
import {Grid, IconButton, TextField} from "@mui/material";
import PlaylistRemoveOutlinedIcon from '@mui/icons-material/PlaylistRemove';
import {
    changeFilterTodolistAC,
    changeTitleTodolistAC,
    removeTodolistAC
} from "../../store/reducers/TodolistReducer/actionsForTodolist";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {addTaskAC, changeIsDoneTaskAC, changeTitleTaskAC, removeTaskAC} from "../../store/reducers/TaskReducer/actionsForTasks";
import {filterType} from "../../store/reducers/TodolistReducer/TodolistReducer";
import {ButtonsForFilter} from "../ButtonsForFilter/ButtonsForFilter";
import {Tasks} from "../Tasks/Tasks";

type TodolistType = {
    todoID: string,
    todoTitle: string
    filter: filterType
}

export const Todolist = (props: TodolistType) => {

    const {
        todoID,
        todoTitle,
        filter,
    } = props;

    const tasks = useSelector(selectStateTask);
    const dispatch = useDispatch<Dispatch>();

    const removeTodolistHandler = () => {
        dispatch(removeTodolistAC(todoID));
    }
    const addTaskHandler = (title: string) => {
        dispatch(addTaskAC(todoID, title))
    }
    const removeTaskHandler = (taskID: string) => {
        dispatch(removeTaskAC(todoID, taskID));
    }
    const onChangeIsDoneTaskHandler = (e: ChangeEvent<HTMLInputElement>, taskID: string) => {
        const checkedValue = e.currentTarget.checked;
        dispatch(changeIsDoneTaskAC(todoID, taskID, checkedValue))
    }
    const onChangeTaskTitle = (taskID: string, value: string) => {
        dispatch(changeTitleTaskAC(todoID, taskID, value))
    }
    const onChangeTodolistTitleHandler = (value: string) => {
        dispatch(changeTitleTodolistAC(todoID, value));
    }
    const onChangeFilter = (filter: filterType) => {
        dispatch(changeFilterTodolistAC(todoID, filter));
    }

    let filteredTasks = tasks[todoID];
    if (filter === 'active') {
        filteredTasks = filteredTasks.filter(t => !t.isDone);
    }
    if (filter === 'completed') {
        filteredTasks = filteredTasks.filter(t => t.isDone);
    }


    return (
        <div className={s.todolist}>
            <Grid container alignItems={'center'}>
                <EditSpan title={todoTitle} changeTitle={onChangeTodolistTitleHandler} removeItemHandler={removeTodolistHandler}/>
                <IconButton size={'small'}
                            style={{marginLeft: '20px', backgroundColor: 'none'}}
                            onClick={removeTodolistHandler}
                >
                    <PlaylistRemoveOutlinedIcon color={'error'} fontSize={'large'}/>
                </IconButton>
            </Grid>

            <Grid container>
                <AddItemForm addItem={addTaskHandler}/>
            </Grid>

            <ul className={s.listTasks}>
                <Tasks tasks={filteredTasks}
                       onChangeIsDoneTaskHandler={onChangeIsDoneTaskHandler}
                       onChangeTaskTitle={onChangeTaskTitle}
                       removeTaskHandler={removeTaskHandler}
                />
            </ul>

            <Grid container justifyContent={'space-between'} style={{marginTop: '40px'}}>
                <ButtonsForFilter onChangeFilter={onChangeFilter}/>
            </Grid>
        </div>
    );
};
