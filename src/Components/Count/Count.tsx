import React, {FC} from 'react'
import s from './Count.module.css'
import {Button} from "../Button/Button"
import {useDispatch} from "react-redux";
import {SetViewSettAC} from "../../store/app-reducer";

type CountPropsType = {
    numb: number
    maxVal: number
    startVal: number
    disSetButton: boolean
    incButton: () => void
    resetButton: () => void
}

export const Count: FC<CountPropsType> = (props) => {

    console.log('Count render')

    const dispatch = useDispatch()

    function onClickIncButton() {
        props.incButton()
    }

    function onClickResButton() {
        props.resetButton()
    }

    function onClickSetButton() {
        dispatch(SetViewSettAC(true))
    }

    const disIncButton = props.numb >= props.maxVal || !props.disSetButton
    const disResetButton = props.numb === props.startVal || !props.disSetButton

    const classInc = disIncButton ? s.disabled : s.incButton
    const classReset = disResetButton ? s.disabled : s.resetButton

    const countStr = props.maxVal < 0 || props.startVal < 0 ? 'Incorrect value!'
        : props.maxVal === props.startVal || !props.disSetButton ? 'Press "set" and enter value'
            : props.numb

    function countClass() {
        let classCount
        if (props.numb === props.maxVal) {
            classCount = s.countRed
        }
        if (props.maxVal < 0 || props.startVal < 0 || !props.disSetButton || props.maxVal === props.startVal) {
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
                    <Button onClick={onClickResButton}
                            disabled={props.numb === 0}
                            className={classReset}
                    >reset</Button>
                    <Button
                        className={s.button}
                        onClick={onClickSetButton}
                    >set</Button>
                </div>
            </div>
        </div>
    );
};