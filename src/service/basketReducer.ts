import { DELETE, UPDATE_GR, UPDATE_GR_PRO } from "./constant";

const initialState = {
    gr: 0,
    grPro: [] as GRPro[],
}

export type rootBasket = typeof initialState

export type GrProColor = Partial<'red' | 'blue' | 'green'>;

type GRPro = {count: number, color: GrProColor}

type Action = {
    type: string;
    number: number;
    color: GrProColor
    deleteType? : 'grpro' | 'gr'
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
            const find = state.grPro.find(i => i.color === action.color)
            return {
                ...state,
                grPro: find ? state.grPro.map(i => i.color === action.color ? {...i, count: action.number} : i) : [...state.grPro, {count: action.number, color: action.color}],
            }
        }
        case DELETE: {
            return action.deleteType === 'gr' ? {
                ...state,
                gr: 0
            } : {
                ...state,
                grPro: [...state.grPro.filter(i => i.color === action.color)]
            }
        }
        default:
            return state
    }
}