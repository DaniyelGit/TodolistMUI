import {initialStateTodolistType, TodolistReducer} from "./TodolistReducer";
import {addTodolistAC, changeFilterTodolistAC, changeTitleTodolistAC, removeTodolistAC} from "./actionsForTodolist";


let state: initialStateTodolistType = {
    todolist: []
};

export const todolistID_1 = 'todolistID_1';
export const todolistID_2 = 'todolistID_2';

beforeEach(() => {
    state = {
        todolist: [
            {id: todolistID_1, title: 'Products', filter: 'all'},
            {id: todolistID_2, title: 'Books', filter: 'all'},
        ]
    }
})

test('correct TodolistReducer should be added', () => {
    const title = 'Films';
    const action = addTodolistAC(title);
    const endState = TodolistReducer(state, action);

    expect(endState.todolist.length).toBe(3);
    expect(endState.todolist[0].title).toBe('Films');
    expect(endState.todolist[1].title).toBe('Products');
});

test('correct TodolistReducer should be removed', () => {
    const action = removeTodolistAC(todolistID_2);
    const endState = TodolistReducer(state, action);

    expect(endState.todolist.length).toBe(1);
    expect(endState.todolist[0].id).toBe(todolistID_1);
    expect(state.todolist.length).toBe(2);
});

test('correct title should be changes', () => {
    const newTitle = 'TestTitle';
    const action = changeTitleTodolistAC(todolistID_1, newTitle);
    const endState = TodolistReducer(state, action);

    expect(endState.todolist.length).toBe(2);
    expect(endState.todolist[1].title).toBe('Books');
    expect(endState.todolist[0].title).toBe(newTitle);
    expect(state.todolist.length).toBe(2);
});

test('correct filter TodolistReducer should be changed', () => {
    const action = changeFilterTodolistAC(todolistID_2, 'active');
    const endState = TodolistReducer(state, action);

    expect(endState.todolist[0].filter).toBe('all');
    expect(endState.todolist[1].filter).toBe('active');
})