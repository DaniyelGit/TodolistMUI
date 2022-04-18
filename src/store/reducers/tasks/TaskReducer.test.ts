import {initialStateTaskType, TaskReducer} from "./TaskReducer";
import {todolistID_1, todolistID_2} from "../todolist/TodolistReducer.test";
import {addTaskAC} from "./action";
import {addTodolistAC, removeTodolistAC} from "../todolist/action";

let state: initialStateTaskType = {};

beforeEach(() => {
    state = {
        [todolistID_1]: [
            {id: '1', title: 'Молоко', isDone: false},
            {id: '2', title: 'Хлеб', isDone: false},
            {id: '3', title: 'Батон', isDone: true},
            {id: '4', title: 'Помидоры', isDone: true},
        ],
        [todolistID_2]: [
            {id: '1', title: 'Война и мир', isDone: false},
            {id: '2', title: 'Куджо', isDone: false},
            {id: '3', title: 'Гари Поттер', isDone: true},
            {id: '4', title: 'Сияние', isDone: true},
        ]
    }
})

test('correct task should be added', () => {
    const title = 'Огурцы';
    const action = addTaskAC(todolistID_1, title);
    const endState = TaskReducer(state, action);

    expect(endState[todolistID_1].length).toBe(5);
    expect(endState[todolistID_1][0].title).toBe(title);
    expect(endState[todolistID_2].length).toBe(4);
});

test('correct todolist should be added', () => {
    const title = 'new Todolist';
    const action = addTodolistAC(title);
    const endState = TaskReducer(state, action);

    const keys = Object.keys(endState);
    const newKeys = keys.find(el => el !== todolistID_1 && el !== todolistID_2);
    if (!newKeys) {
        throw Error('new key should be added')
    }

    expect(keys.length).toBe(3);
    expect(endState[newKeys]).toEqual([]);

});

test('correct todolist should be remove', () => {
    const action = removeTodolistAC(todolistID_2);
    const endState = TaskReducer(state, action);
    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState[todolistID_1].length).toBe(4);
})