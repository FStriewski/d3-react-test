import {DRAW_MANUAL} from '../actions/barInput'


const initalState = {
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
    number5: 5,
}

export default function (state=initalState, action={})  {
    if(action.type === DRAW_MANUAL){
        return {...state, ...action.payload} 
    }
    return state

}