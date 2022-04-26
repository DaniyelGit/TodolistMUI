import React, {ChangeEvent} from 'react';
import s from './Tasks.module.css';
import {TaskType} from "../../store/reducers/TaskReducer/TaskReducer";
import {Delete} from "@mui/icons-material";
import {EditSpan} from "../EditableSpan/EditSpan";
import {Checkbox, IconButton} from "@mui/material";



type TasksType = {
    tasks: Array<TaskType>
    onChangeIsDoneTaskHandler: (e: ChangeEvent<HTMLInputElement>, taskID: string) => void
    onChangeTaskTitle: (taskID: string, value: string) => void
    removeTaskHandler: (taskID: string) => void
}

export const Tasks = (props: TasksType) => {

    const {
        tasks,
        onChangeIsDoneTaskHandler,
        onChangeTaskTitle,
        removeTaskHandler,
    } = props;

    return (
        <>
            {
                tasks.map(t => {
                    return (
                        <li key={t.id} className={`${t.isDone ? s.completedTask : ''}`}>
                            <Checkbox
                                onChange={(e) => onChangeIsDoneTaskHandler(e, t.id)}
                                checked={t.isDone}
                                color="primary"
                                style={{padding: '0 10px 0 0'}}
                            />
                            <EditSpan title={t.title}
                                      changeTitle={(value) => onChangeTaskTitle(t.id, value)}
                                      removeItemHandler={() => removeTaskHandler(t.id)}
                            />
                            <IconButton onClick={() => removeTaskHandler(t.id)}
                                        size={'small'}
                                        style={{marginLeft: 'auto'}}
                            >
                                <Delete color={'error'}/>
                            </IconButton>
                        </li>
                    );
                })
            }
        </>
    );
};