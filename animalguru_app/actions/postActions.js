import { 
    NEW_VOLUNTEER,
    GET_PUPPIES,
    GET_KITTENS
} from './types'

// Make a new Volunteer
export const createVolunteer = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
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

// Get the dogs from the database
export const getPuppies = () => dispatch => {
    fetch('https://animalguru.store/api/getDogs', {
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

// Get the cats from the database
export const getKittens = () => dispatch => {
    fetch('https://animalguru.store/api/getCats', {
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then(cats => dispatch({
        type: GET_KITTENS,
        payload: cats.cats
    }))
    .catch(error => console.log(error))
}