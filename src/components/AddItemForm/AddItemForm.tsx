import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './AddItemForm.module.css';

import {IconButton, TextField} from "@mui/material";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

type AddItemFormType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {

    const {
        addItem,
    } = props

    const [title, setTitle] = React.useState<string>('');
    const [error, setError] = React.useState<boolean>(false);

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
        setError(false);
    }

    const addTodolistHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle('');
        }
        else {
            setError(true)
        }
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addTodolistHandler();
    }

    return (
        <div className={s.addItemForm}>
            <TextField id={'standard-error'}
                       error={error}
                       variant="outlined"
                       size={'small'}
                       label={error ? 'Введите заголовок' : 'Заголовок'}
                       value={title}
                       onChange={onChangeTitle}
                       onKeyPress={onKeyPressHandler}
            />

            <IconButton aria-label="addCircle"
                        color="primary"
                        size={'small'}
                        style={{marginLeft: '5px'}}
                        onClick={addTodolistHandler}
            >
                <AddCircleOutlinedIcon fontSize={'large'}/>
            </IconButton>
        </div>
    );
};
