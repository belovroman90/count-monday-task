import React, {useState} from 'react';
import s from './App.module.css';
import {Count} from "./Components/Count/Count";
import {Settings} from "./Components/Settings/Settings";

export function App() {

    const [viewSet, setViewSet] = useState<boolean>(false);
    const [numb, setNumb] = useState<number>(0);
    const [maxVal, setMaxVal] = useState<number>(5);
    const [startVal, setStartVal] = useState<number>(0);
    const [disSetButton, setDisSetButton] = useState<boolean>(true);

    function incButton() {
        setNumb(numb + 1);
    }

    function resetButton() {
        setNumb(startVal);
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