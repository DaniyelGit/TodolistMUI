import {initialStateType} from "./TodolistReducer";

let state: initialStateType = [];

const todolistID_1 = 'todolistID_1';
const todolistID_2 = 'todolistID_2';

beforeEach(() => {
    state = [
        {id: todolistID_1, title: 'Products', filter: 'all'},
        {id: todolistID_2, title: 'Books', filter: 'all'},
    ]
})

test('', () => {

})