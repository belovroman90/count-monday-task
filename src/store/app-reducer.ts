const INCREMENT_VALUE = 'INCREMENT-VALUE'
const RESET_VALUE = 'RESET-VALUE'
const VIEW_SETTINGS = 'VIEW-SETTINGS'
const SET_MAX_VALUE = 'SET-MAX-VALUE'
const SET_START_VALUE = 'SET-START-VALUE'
const ONCLICK_SET_BUTTON = 'ONCLICK-SET-BUTTON'

const localStorageValue = localStorage.getItem('countValue')
const localStorageStartValue = localStorage.getItem('startValue')
const localStorageMaxValue = localStorage.getItem('maxValue')

const initialState = {
    value: localStorageValue ? JSON.parse(localStorageValue) : 0,
    maxValue: localStorageMaxValue ? JSON.parse(localStorageMaxValue) : 0,
    startValue: localStorageStartValue ? JSON.parse(localStorageStartValue) : 0,
    viewSett: false
}

export function countReducer(state: CountStateType = initialState, action: ActionType): CountStateType {
    switch (action.type) {

        case INCREMENT_VALUE:
            const res = state.value + 1
            return {...state, value: res}

        case RESET_VALUE:
            return {...state, value: state.startValue}

        case VIEW_SETTINGS:
            return {...state, viewSett: action.viewSett}

        case SET_MAX_VALUE:
            return {...state, maxValue: action.value}

        case SET_START_VALUE:
            return {...state, startValue: action.value}

        case ONCLICK_SET_BUTTON:
            const countValue = state.value <= state.startValue ? state.startValue : state.value
            return {...state, value: countValue}

        default:
            return state
    }
}

// actions
export const incrementValueAC = () => ({type: INCREMENT_VALUE}) as const
export const resetValueAC = () => ({type: RESET_VALUE}) as const
export const viewSettAC = (viewSettValue: boolean) => {
    return {type: VIEW_SETTINGS, viewSett: viewSettValue} as const
}
export const setMaxValueAC = (value: number) => ({type: SET_MAX_VALUE, value}) as const
export const setStartValueAC = (value: number) => ({type: SET_START_VALUE, value}) as const
export const onClickSetButtonAC = (startValue: number, maxValue: number) => ({
    type: ONCLICK_SET_BUTTON,
    startValue,
    maxValue
}) as const

// types
export type CountStateType = {
    value: number
    maxValue: number
    startValue: number
    viewSett: boolean
}
type IncrementValueAT = ReturnType<typeof incrementValueAC>
type ResetValueAT = ReturnType<typeof resetValueAC>
type ViewSettAT = ReturnType<typeof viewSettAC>
type SetMaxValueAT = ReturnType<typeof setMaxValueAC>
type SetStartValueAT = ReturnType<typeof setStartValueAC>
type OnClickSetButtonAT = ReturnType<typeof onClickSetButtonAC>
export type ActionType = ViewSettAT
    | IncrementValueAT
    | ResetValueAT
    | SetMaxValueAT
    | SetStartValueAT
    | OnClickSetButtonAT