import {initialStateTodolistType, TodolistReducer} from "../TodolistReducer/TodolistReducer";
import {initialStateTaskType, TaskReducer} from "../TaskReducer/TaskReducer";
import {addTodolistAC, removeTodolistAC} from "../TodolistReducer/actionsForTodolist";
import {todolistID_1, todolistID_2} from "../TodolistReducer/TodolistReducer.test";

test('correct TodolistReducer should be added in state task and TodolistReducer', () => {
    const startStateTodolist: initialStateTodolistType = {
        todolist: []
    };
    const startStateTask: initialStateTaskType = {};

    const action = addTodolistAC('new Todolist');

    const endStateTodolist = TodolistReducer(startStateTodolist, action);
    const endStateTask = TaskReducer(startStateTask, action);

    const keys = Object.keys(endStateTask);
    const taskID = keys[0];
    const todoID = endStateTodolist.todolist[0].id;

    expect(taskID).toBe(todoID);
    expect(taskID).toBe(action.todoID);
    expect(todoID).toBe(action.todoID);
    expect(endStateTodolist.todolist[0].title).toBe('new Todolist')
    expect(endStateTask[taskID]).toEqual([]);
})

test('correct TodolistReducer should be removed in state task and TodolistReducer', () => {
    const stateTodolist: initialStateTodolistType = {
        todolist: [
            {id: todolistID_1, title: 'Products', filter: 'all'},
            {id: todolistID_2, title: 'Books', filter: 'all'},
        ],
    }
    const stateTask: initialStateTaskType = {
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
    };

    const action = removeTodolistAC(todolistID_2);

    const endStateTodolist = TodolistReducer(stateTodolist, action);
    const endStateTask = TaskReducer(stateTask, action);

    const arrKeys = Object.keys(endStateTask);
    const currencyKey = arrKeys[0];

    expect(endStateTodolist.todolist.length).toBe(1);
    expect(endStateTodolist.todolist[0].id).toEqual(todolistID_1);

    expect(arrKeys.length).toBe(1);
    expect(endStateTask[currencyKey].length).toBe(4);
    expect(endStateTask[currencyKey][2].id).toBe('3');
})