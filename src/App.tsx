import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {Count} from "./Components/Count/Count";
import {Settings} from "./Components/Settings/Settings";

export function App() {


    const [viewSet, setViewSet] = useState<boolean>(false);
    const [numb, setNumb] = useState<number>(loadStorageValue('countValue'));
    const [maxVal, setMaxVal] = useState<number>(loadStorageValue('maxValue'));
    const [startVal, setStartVal] = useState<number>(loadStorageValue('startValue'));
    const [disSetButton, setDisSetButton] = useState<boolean>(true);

    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(numb));
    }, [numb])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxVal));
    }, [maxVal])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startVal));
    })

    function loadStorageValue(nameStorage: string) {
        const valueStorageString = localStorage.getItem(nameStorage);
        if (valueStorageString === null) {
            return 0;
        }
        return JSON.parse(valueStorageString);
    }

    function incButton() {
        setNumb(numb + 1);
    }

    function resetButton() {
        setNumb(startVal);
        localStorage.removeItem('countValue');
    }

    let renderCount;

    viewSet ?
        renderCount =
            <Settings
                maxVal={maxVal}
                startVal={startVal}
                disSetButton={disSetButton}
                setViewSet={setViewSet}
                setNumb={setNumb}
                setMaxVal={setMaxVal}
                setStartVal={setStartVal}
                setDisSetButton={setDisSetButton}
                loadStorageValue={loadStorageValue}
            />
        : renderCount = <Count
            viewSet={viewSet}
            numb={numb}
            maxVal={maxVal}
            startVal={startVal}
            disSetButton={disSetButton}
            setViewSet={setViewSet}
            incButton={incButton}
            resetButton={resetButton}
        />

    return (
        <div className={s.app}>
            {renderCount}
        </div>
    )

}