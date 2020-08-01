import {CHANGE_SEARCH_FIELD,
    REQUES_ROBOTS_PENDING,
    REQUES_ROBOTS_SUCCESS,
    REQUES_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestRobotsAction = () => (dispatch) => {
    dispatch({type: REQUES_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({type: REQUES_ROBOTS_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUES_ROBOTS_FAILED, payload: error}))
}