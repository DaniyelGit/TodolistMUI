import React from 'react';
import {Button, Grid} from "@mui/material";
import {filterType} from "../../store/reducers/TodolistReducer/TodolistReducer";

type ButtonsForFilterType = {
    onChangeFilter: (filter: filterType) => void
}

export const ButtonsForFilter = (props: ButtonsForFilterType) => {

    const {
        onChangeFilter,
    } = props;

    return (
        <>
            <Button variant={'contained'}
                    size={'small'}
                    onClick={() => onChangeFilter('all')}
            >all</Button>
            <Button variant={'contained'}
                    size={'small'}
                    color={'error'}
                    onClick={() => onChangeFilter('active')}
            >active</Button>
            <Button variant={'contained'}
                    size={'small'}
                    color={'success'}
                    onClick={() => onChangeFilter('completed')}
            >completed</Button>
        </>
    );
};