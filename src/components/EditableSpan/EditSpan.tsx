import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './EditSpan.module.css';
import {TextField} from "@mui/material";

type EditSpanType = {
    title: string
    changeTitle: (value: string) => void
}

export const EditSpan = (props: EditSpanType) => {

    const {
        title,
        changeTitle,
    } = props;

    const [edit, setEdit] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string>(title);

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    const onBlur = () => {
        changeTitle(value);
        setEdit(false)
    }

    const onKeyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') onBlur();
    }


    return (
        edit
            ? <TextField size={'small'}
                         value={value}
                         onChange={onChangeValue}
                         autoFocus
                         onBlur={onBlur}
                         onKeyPress={onKeyEnter}

            />
            : <span className={s.editSpan}
                    onDoubleClick={() => setEdit(true)}
            >
                {title}
            </span>
    );
};
