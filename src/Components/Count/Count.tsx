import React from 'react'
import s from './Count.module.css'
import {Button} from "../Button/Button"
import {useDispatch, useSelector} from "react-redux";
import {CountStateType, IncrementValueAC, ResetValueAC, ViewSettAC} from "../../store/app-reducer";
import {AppRootStateType} from "../../store/store";

export const Count = () => {

    const state = useSelector<AppRootStateType, CountStateType>(state => state.countState)
    const dispatch = useDispatch()

    function onClickIncButton() {
        dispatch(IncrementValueAC())
    }

    function onClickResButton() {
        dispatch(ResetValueAC())
    }

    function onClickSettButton() {
        dispatch(ViewSettAC(true))
    }

    const disIncButton = state.value >= state.maxValue
    const disResetButton = state.value === state.startValue

    const classInc = disIncButton ? s.disabled : s.incButton
    const classReset = disResetButton ? s.disabled : s.resetButton

    const countStr = state.maxValue < 0 || state.startValue < 0 ? 'Incorrect value!'
        : state.maxValue === state.startValue
            ? 'Press "sett" and enter value' : state.value

    function countClass() {
        let classCount
        if (state.value === state.maxValue) {
            classCount = s.countRed
        }
        if (state.maxValue < 0 || state.startValue < 0
            || state.maxValue === state.startValue) {
            classCount = s.incorrectValCount
        }
        return classCount
    }

    const classCount = countClass()


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
                    <Button
                        onClick={onClickResButton}
                        disabled={state.value === 0}
                        className={classReset}
                    >reset</Button>
                    <Button
                        className={s.button}
                        onClick={onClickSettButton}
                    >sett</Button>
                </div>
            </div>
        </div>
    );
};