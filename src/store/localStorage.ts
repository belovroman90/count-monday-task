import {AppRootStateType} from "./store";

export const loadState = () => {
    try {
        const preloadedState = localStorage.getItem('app-state')
        if (preloadedState === null) {
            return undefined
        }
        return JSON.parse(preloadedState)
    } catch (e) {
        return undefined
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        const localStorageState = JSON.stringify(state)
        localStorage.setItem('app-state', localStorageState)
    } catch (e) {
    }
}