import React, {ChangeEvent} from 'react';
import s from './Settings.module.css';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    CountStateType,
    OnClickSetButtonAC,
    SetMaxValueAC,
    SetStartValueAC,
    ViewSettAC
} from "../../store/app-reducer";
import {AppRootStateType} from "../../store/store";

export const Settings = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, CountStateType>(state => state.countState)

    function onChangeMaxVal(e: ChangeEvent<HTMLInputElement>) {
        const newVal = +e.currentTarget.value
        dispatch(SetMaxValueAC(newVal > state.startValue ? newVal : state.startValue))
    }

    function onChangeStartVal(e: ChangeEvent<HTMLInputElement>) {
        const newVal = +e.currentTarget.value
        dispatch(SetStartValueAC(newVal < state.maxValue ? newVal : state.maxValue))
    }

    function onClickSetButton() {
        dispatch(OnClickSetButtonAC(state.startValue, state.maxValue))
        dispatch(ViewSettAC(false))
    }

    const classIncorrectMaxVal = state.maxValue < 0 || state.maxValue === state.startValue ? s.incorrect : ''
    const classIncorrectStVal = state.startValue < 0 || state.startValue === state.maxValue ? s.incorrect : ''

    const disabledSetButton = state.maxValue < 0 || state.startValue < 0 || state.maxValue === state.startValue
    const classDisSetButton = disabledSetButton ? s.disabled : s.button

    return (
        <div className={s.container}>
            <div className={s.values}>

                <div className={s.labelInput}>
                    <label htmlFor={'maxVal'}>max value: </label>
                    <input type="number" id={'maxVal'}
                           value={state.maxValue}
                           onChange={onChangeMaxVal}
                           className={classIncorrectMaxVal}
                    />
                </div>

                <div className={s.labelInput}>
                    <label htmlFor={'startVal'}> start value: </label>
                    <input type="number" id={'startVal'}
                           value={state.startValue}
                           onChange={onChangeStartVal}
                           className={classIncorrectStVal}
                    />
                </div>
            </div>

            <div className={s.buttonContainer}>
                <Button
                    className={classDisSetButton}
                    onClick={onClickSetButton}
                >set</Button>
            </div>
        </div>
    );
};