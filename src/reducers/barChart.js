import {DRAW_MANUAL} from '../actions/barInput'


const initalState = [1,2,3,4,5]

export default function (state=initalState, action={})  {
    if(action.type === DRAW_MANUAL){
        return state
    }
    return state

}