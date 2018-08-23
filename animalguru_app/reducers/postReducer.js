import {
    NEW_VOLUNTEER,
    GET_PUPPIES,
    GET_KITTENS
} from '../actions/types'

const initialState = {
    volunteerInfo: {},
    dogs: [],
    cats: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_VOLUNTEER:
            return {
                ...state,
                volunteerInfo: action.payload
            }
        case GET_PUPPIES:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_KITTENS:
            return {
                ...state,
                cats: action.payload
            }
        default:
            return state
    }
}