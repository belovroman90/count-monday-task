import React, {ChangeEvent, FC, useState} from 'react';
import s from './Settings.module.css';
import {Button} from "../Button/Button";

type SettingsPropsType = {
    maxVal: number
    startVal: number
    disSetButton: boolean
    setViewSet: (val: boolean) => void
    setNumb: (val: number) => void
    setMaxVal: (val: number) => void
    setStartVal: (val: number) => void
    setDisSetButton: (val: boolean) => void
}

export const Settings: FC<SettingsPropsType> = (props) => {

    function onChangeMaxVal(e: ChangeEvent<HTMLInputElement>) {
        props.setDisSetButton(false);
        const newVal = +e.currentTarget.value;
        props.setMaxVal(newVal > props.startVal ? newVal : props.startVal);
    }

    function onChangeStartVal(e: ChangeEvent<HTMLInputElement>) {
        props.setDisSetButton(false);
        const newVal = +e.currentTarget.value;
        props.setStartVal(newVal < props.maxVal ? newVal : props.maxVal);
    }

    function onClickSetButton() {
        props.setNumb(props.startVal);
        props.setDisSetButton(true);
        props.setViewSet(false);
    }


    const classIncorrectMaxVal = props.maxVal < 0 || props.maxVal === props.startVal ? s.incorrect : '';
    const classIncorrectStVal = props.startVal < 0 || props.startVal === props.maxVal ? s.incorrect : '';

    const disabledSetButton = props.maxVal < 0 || props.startVal < 0 || props.maxVal === props.startVal;
    const classDisSetButton = disabledSetButton ? s.disabled : s.button;

    return (
        <div className={s.container}>
            <div className={s.values}>
                <div className={s.labelInput}>
                    <label htmlFor={'maxVal'}>max value: </label>
                    <input type="number" id={'maxVal'}
                           value={props.maxVal}
                           onChange={onChangeMaxVal}
                           className={classIncorrectMaxVal}
                    />
                </div>
                <div className={s.labelInput}>
                    <label htmlFor={'startVal'}> start value: </label>
                    <input type="number" id={'startVal'}
                           value={props.startVal}
                           onChange={onChangeStartVal}
                           className={classIncorrectStVal}
                    />
                </div>
            </div>
            <div className={s.buttonContainer}>
                <Button
                    className={classDisSetButton}
                    onClick={onClickSetButton}
                    disabled={disabledSetButton}
                >set</Button>
            </div>
        </div>
    );
};