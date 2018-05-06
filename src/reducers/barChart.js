import {DRAW_MANUAL, RESET} from '../actions/barInput'


const initialState = {
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
    number5: 5,
}

export default function (state=initialState, action={})  {
    if(action.type === DRAW_MANUAL){
        return {...state, ...action.payload} 
    }
    if (action.type === RESET) {
        return { ...state, ...initialState }
    }
    return state

}