import React from 'react'
import s from './App.module.css'
import {Count} from "./Components/Count/Count"
import {Settings} from "./Components/Settings/Settings"
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";

export function App() {

    const viewSett = useSelector<AppRootStateType, boolean>(state => {
        return state.countState.viewSett
    })

    return (
        <div className={s.app}>
            {viewSett ? <Settings/> : <Count/>}
        </div>
    )
}