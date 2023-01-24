import { UPDATE_GR, UPDATE_GR_PRO } from "./constant";

const initialState = {
    gr: 0,
    grPro: [{count: 0, color: 'red' as GrProColor}],
    total: 0,
}

export type rootBasket = typeof initialState

export type GrProColor = 'red' | 'blue' | 'green';

type Action = {
    type: string;
    number: number;
}

export default function basketReducer(state = initialState, action: Action){
    switch(action.type){
        case UPDATE_GR: {
            return {
                ...state,
                gr: action.number,
                total: state.grPro.reduce((acc, i) => acc + i.count, 0) + action.number
            }
        }
        case UPDATE_GR_PRO: {
            return {
                ...state,
                grPro: action.number,
                total: state.total + state.gr,
            }
        }
        default:
            return state
    }
}