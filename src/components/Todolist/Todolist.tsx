import React, {ChangeEvent} from 'react';
import s from './Todolist.module.css';
import {useDispatch, useSelector} from "react-redux";
import {rootStoreType} from "../../store/state";
import {initialStateTaskType} from "../../store/reducers/TaskReducer/TaskReducer";
import {Dispatch} from "redux";
import {EditSpan} from "../EditableSpan/EditSpan";
import {Button, Checkbox, Grid, IconButton, TextField} from "@mui/material";
import PlaylistRemoveOutlinedIcon from '@mui/icons-material/PlaylistRemove';
import {changeTitleTodolistAC, removeTodolistAC} from "../../store/reducers/TodolistReducer/action";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import {addTaskAC, changeIsDoneTaskAC, changeTitleTaskAC, removeTaskAC} from "../../store/reducers/TaskReducer/action";
import {Delete} from "@mui/icons-material";


type TodolistType = {
    todoID: string,
    todoTitle: string
}

export const Todolist = (props: TodolistType) => {

    const {
        todoID,
        todoTitle,
    } = props;

    const tasks = useSelector<rootStoreType, initialStateTaskType>(state => state.task);
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



    return (
        <div className={s.todolist}>
            <Grid container alignItems={'center'}>
                <EditSpan title={todoTitle} changeTitle={onChangeTodolistTitleHandler}/>
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
                   {
                       tasks[todoID].map(t => {
                           return (
                               <li>
                                   <Checkbox
                                       onChange={(e) => onChangeIsDoneTaskHandler(e, t.id)}
                                       checked={t.isDone}
                                       color="primary"
                                       style={{padding: '0 10px 0 0'}}
                                   />
                                   <EditSpan title={t.title}
                                             changeTitle={(value) => onChangeTaskTitle(t.id, value)}
                                   />
                                   <IconButton onClick={() => removeTaskHandler(t.id)}
                                               size={'small'}
                                               style={{marginLeft: 'auto'}}
                                   >
                                       <Delete color={'error'}/>
                                   </IconButton>
                               </li>
                           )
                       })
                   }
               </ul>
        </div>
    );
};
