import {Action } from './actions';

export interface TokenState {
    tokens: string
}

const initialState = {
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){ //verifica  tipo de action
        case "ADD_TOKEN": {
            return {tokens: action.payload} //payload é o próprio token
        }

        default:
            return state //estado vazio
    }
}