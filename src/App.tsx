import React, {useState} from 'react';
import s from './App.module.css';

export function App() {
    const [numb, setNumb] = useState<number>(0);

    function onClickInc() {
        setNumb(numb + 1);
    }

    function onClickReset() {
        setNumb(0);
    }

    const styleCount = {
        color: numb > 4 ? "red" : "#2A2C36",
    }
    const styleInc = numb > 4 ? s.disabled : s.incButton;
    const styleReset = numb === 0 ? s.disabled : s.resetButton;

    return (
        <div className={s.app}>
            <div className={s.container}>
                <div className={s.count} style={styleCount}>
                    {numb}
                </div>
                <div className={s.buttons}>
                    <button onClick={onClickInc} className={styleInc} disabled={numb > 4}>inc</button>
                    <button onClick={onClickReset} className={styleReset} disabled={numb === 0}>reset</button>
                </div>
            </div>
        </div>
    );
}