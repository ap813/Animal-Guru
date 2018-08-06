import { 
    FETCH_POSTS,
    NEW_VOLUNTEER
} from '../actions/types'

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_VOLUNTEER:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}