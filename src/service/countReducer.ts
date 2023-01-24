import { GR_MINUS, GR_PLUS, GR_PRO_MINUS, GR_PRO_PLUS } from "./constant";

const initialState = {
    gripster: {
      count: 1,
      price: 999,
      oldPrice: 1429,
    },
    gripsterPro: {
      count: 1,
      price: 999,
      oldPrice: 1429,
    }
  }

  type Action = {
    type: string;
  }

  export type rootCount = typeof initialState;

  export const countReducer = (state = initialState, action: Action) => {
    switch(action.type){
        case GR_PLUS: {
            return {
                ...state,
                gripster: {
                    ...state.gripster,
                    count: state.gripster.count++ >= 10 ? 10 : state.gripster.count++
                }
            }
        }
        case GR_MINUS: {
            return {
                ...state,
                gripster: {
                    ...state.gripster,
                    count: state.gripster.count-- <= 1 ? 1 : state.gripster.count--
                }
            }
        }
        case GR_PRO_PLUS: {
          return {
              ...state,
              gripsterPro: {
                  ...state.gripsterPro,
                  count: state.gripsterPro.count++ >= 10 ? 10 : state.gripsterPro.count++
              }
          }
      }
      case GR_PRO_MINUS: {
          return {
              ...state,
              gripsterPro: {
                  ...state.gripsterPro,
                  count: state.gripsterPro.count-- <= 1 ? 1 : state.gripsterPro.count--
              }
          }
      }
        default:
            return state
    }

  }