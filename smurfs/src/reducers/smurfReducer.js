import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURF } from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
        return {
            ...state,
            isLoading: true,
            error: ''
        }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                isLoading: false,
                smurfs: [...state.smurfs, action.payload],
                error: ''
            }
        default:
        return {
            ...state
        }
    }
}
