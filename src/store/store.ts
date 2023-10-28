import {combineReducers, createStore} from "redux"
import {countReducer} from "./app-reducer";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    countState: countReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState(store.getState())
})

export type AppRootStateType = ReturnType<typeof rootReducer>