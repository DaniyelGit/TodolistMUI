import {initialStateType, todolistReducer} from "./TodolistReducer";
import {addTodolistAC, changeFilterTodolistAC, changeTitleTodolistAC, removeTodolistAC} from "./action";


let state: initialStateType = [];

const todolistID_1 = 'todolistID_1';
const todolistID_2 = 'todolistID_2';

beforeEach(() => {
    state = [
        {id: todolistID_1, title: 'Products', filter: 'all'},
        {id: todolistID_2, title: 'Books', filter: 'all'},
    ]
})

test('correct todolist should be added', () => {
    const title = 'Films';
    const action = addTodolistAC(title);
    const endState = todolistReducer(state, action);

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe('Films');
    expect(endState[1].title).toBe('Products');
});

test('correct todolist should be removed', () => {
    const action = removeTodolistAC(todolistID_2);
    const endState = todolistReducer(state, action);

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistID_1);
    expect(state.length).toBe(2);
});

test('correct title should be changes', () => {
    const newTitle = 'TestTitle';
    const action = changeTitleTodolistAC(todolistID_1, newTitle);
    const endState = todolistReducer(state, action);

    expect(endState.length).toBe(2);
    expect(endState[1].title).toBe('Books');
    expect(endState[0].title).toBe(newTitle);
    expect(state.length).toBe(2);
});

test('correct filter todolist should be changed', () => {
    const action = changeFilterTodolistAC(todolistID_2, 'active');
    const endState = todolistReducer(state, action);

    expect(endState[0].filter).toBe('all');
    expect(endState[1].filter).toBe('active');
})