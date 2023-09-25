const INCREMENT_VALUE = 'INCREMENT-VALUE'
const RESET_VALUE = 'RESET-VALUE'
const VIEW_SETTINGS = 'VIEW-SETTINGS'
const SET_MAX_VALUE = 'SET-MAX-VALUE'
const SET_START_VALUE = 'SET-START-VALUE'
const ONCLICK_SET_BUTTON = 'ONCLICK-SET-BUTTON'

export type CountStateType = {
    value: number
    maxValue: number
    startValue: number
    viewSett: boolean
}

type IncrementValueAT = ReturnType<typeof IncrementValueAC>
type ResetValueAT = ReturnType<typeof ResetValueAC>
type ViewSettAT = ReturnType<typeof ViewSettAC>
type SetMaxValueAT = ReturnType<typeof SetMaxValueAC>
type SetStartValueAT = ReturnType<typeof SetStartValueAC>
type OnClickSetButtonAT = ReturnType<typeof OnClickSetButtonAC>
type ActionType =
    ViewSettAT
    | IncrementValueAT
    | ResetValueAT
    | SetMaxValueAT
    | SetStartValueAT
    | OnClickSetButtonAT

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
            localStorage.setItem('countValue', JSON.stringify(res))
            return {...state, value: res}

        case RESET_VALUE:
            localStorage.setItem('countValue', JSON.stringify(state.startValue))
            return {...state, value: state.startValue}

        case VIEW_SETTINGS:
            return {...state, viewSett: action.viewSett}

        case SET_MAX_VALUE:
            return {...state, maxValue: action.value}

        case SET_START_VALUE:
            return {...state, startValue: action.value}

        case ONCLICK_SET_BUTTON:
            localStorage.setItem('maxValue', JSON.stringify(action.maxValue))
            localStorage.setItem('startValue', JSON.stringify(action.startValue))
            const countValue = state.value <= state.startValue ? state.startValue : state.value
            localStorage.setItem('countValue', JSON.stringify(countValue))
            return {...state, value: countValue}

        default:
            return state
    }
}

export const IncrementValueAC = () => ({type: INCREMENT_VALUE}) as const
export const ResetValueAC = () => ({type: RESET_VALUE}) as const
export const ViewSettAC = (viewSettValue: boolean) => {
    return {type: VIEW_SETTINGS, viewSett: viewSettValue} as const
}
export const SetMaxValueAC = (value: number) => ({type: SET_MAX_VALUE, value}) as const
export const SetStartValueAC = (value: number) => ({type: SET_START_VALUE, value}) as const
export const OnClickSetButtonAC = (startValue: number, maxValue: number) => ({
    type: ONCLICK_SET_BUTTON,
    startValue,
    maxValue
}) as const