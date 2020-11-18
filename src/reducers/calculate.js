import { SET_NUMBER, ADDITION } from '../constantes/actions';

// Source de vérité
const stateInit = {
    number : '',
    result : 0,
    message : 'testfeye'
}

const reducer = (state = stateInit, action= {}) => {

    switch(action.type){

        case SET_NUMBER :

            return {
                ...state,
                number : action.payload
            }

        default:
            return state;
    }
}

export default reducer;