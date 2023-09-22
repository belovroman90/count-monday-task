import {combineReducers, createStore} from "redux"
import {countReducer} from "./app-reducer";

const rootReducer = combineReducers({
    countState: countReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>