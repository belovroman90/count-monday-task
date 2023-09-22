const VIEW_SETTINGS = 'VIEW-SETTINGS'

export type CountStateType = {
    viewSett: boolean
}
const initialState = {
    viewSett: false
}
type SetViewSettAT = ReturnType<typeof SetViewSettAC>
type ActionType = SetViewSettAT

export function countReducer(state: CountStateType = initialState, action: ActionType) {
    switch (action.type) {
        case VIEW_SETTINGS:
            return {...state, viewSett: action.viewSett}
        default:
            return state
    }
}

export const SetViewSettAC = (viewSettValue: boolean) => {
    return {type: VIEW_SETTINGS, viewSett: viewSettValue} as const
}