import React, {FC, useState} from 'react';
import s from './Count.module.css';
import {Button} from "../Button/Button";

type CountPropsType = {
    numb: number
    maxVal: number
    startVal: number
    disSetButton: boolean
    incButton: () => void
    resetButton: () => void
}

export const Count: FC<CountPropsType> = (props) => {

    function onClickIncButton() {
        props.incButton();
    }

    function onClickResButton() {
        props.resetButton();
    }

    const disIncButton = props.numb >= props.maxVal || !props.disSetButton;
    const disResetButton = props.numb === props.startVal || !props.disSetButton;

    const classInc = disIncButton ? s.disabled : s.incButton;
    const classReset = disResetButton ? s.disabled : s.resetButton;

    const countStr = props.maxVal < 0 || props.startVal < 0 || props.maxVal === props.startVal ? 'Incorrect value!'
        : !props.disSetButton ? 'enter value and press "set"' : props.numb;

    function countClass() {
        let classCount;
        if (props.numb === props.maxVal) {
            classCount = s.countRed;
        }
        if (props.maxVal < 0 || props.startVal < 0 || props.maxVal === props.startVal) {
            classCount = s.incorrectValCount;
        }
        // if(!props.disSetButton) classCount = s.enterValue;
        if (countStr === 'enter value and press "set"') {
            classCount = s.enterValue;
        }
        return classCount;
    }

    const classCount = countClass();

    return (
        <div>
            <div className={s.container}>

                <div className={`${s.count} ${classCount}`}>
                    {countStr}
                </div>

                <div className={s.buttons}>
                    <Button onClick={onClickIncButton}
                            disabled={disIncButton}
                            className={classInc}
                    >inc</Button>
                    <Button onClick={onClickResButton}
                            disabled={props.numb === 0}
                            className={classReset}
                    >reset</Button>
                </div>
            </div>
        </div>
    );
};