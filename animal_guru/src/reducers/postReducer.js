import { 
    FETCH_POSTS,
    NEW_VOLUNTEER,
    GET_PUPPIES,
    GET_KITTENS
} from '../actions/types'

const initialState = {
    items: [],
    item: {},
    dogs: [],
    cats: []
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
        case GET_PUPPIES:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_KITTENS:
            return {
                ...state,
                cat: action.payload
            }
        default:
            return state
    }
}