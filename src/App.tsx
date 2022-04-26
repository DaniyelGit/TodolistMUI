import React from 'react';
import './App.module.css';
import s from './App.module.css';

import {Header} from "./components/Header/Header";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {Container, Grid, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectStateTodolist} from "./store/reducers/TodolistReducer/TodolistReducer";
import {Todolist} from "./components/Todolist/Todolist";
import {addTodolistAC} from "./store/reducers/TodolistReducer/action";
import {Dispatch} from "redux";




const App = () => {

    const {
        todolist,
    } = useSelector(selectStateTodolist)

    const dispatch = useDispatch<Dispatch>();

    const addTodolist = (title: string) => {
        dispatch(addTodolistAC(title));
    }

    return (
        <div className="App">
            <Header/>
            <Container fixed>
                <Grid container style={{padding: '20px 0'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <div className={s.line}/>
                <Grid container spacing={3}>
                    {
                        todolist
                        && todolist.map(tl => {
                            return (
                                <Grid item key={`${tl.id}_${tl.title}`}>
                                    <Paper style={{padding: '10px'}}>
                                        <Todolist
                                            todoID={tl.id}
                                            todoTitle={tl.title}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
