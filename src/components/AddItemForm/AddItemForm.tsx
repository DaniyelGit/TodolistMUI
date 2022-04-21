import React, {ChangeEvent} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

type AddItemFormType = {
    addTodolist: (title: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {

    const {
        addTodolist,
    } = props

    const [title, setTitle] = React.useState<string>('');

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    const addTodolistHandler = () => {
        addTodolist(title);
        setTitle('');
    }

    return (
        <div className={'addItemForm'}>
            <TextField id="filled-basic"
                       variant="outlined"
                       size={'small'}
                       label={'Заголовок'}
                       value={title}
                       onChange={onChangeTitle}
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
