import { 
    FETCH_POSTS,
    NEW_VOLUNTEER,
    GET_PUPPIES
} from './types'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(post => dispatch({
        type: FETCH_POSTS,
        payload: post
    }))
    .catch(error => console.log(error))
}

export const createVolunteer = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_VOLUNTEER,
            payload: post
        }))
        .catch(error => console.log(error))
}

export const getPuppies = () => dispatch => {
    fetch('http://animalguru.store/getDogs', {
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then(dogs => dispatch({
        type: GET_PUPPIES,
        payload: dogs.dogs
    }))
    .catch(error => console.log(error))
}