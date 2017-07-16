export const RECEIVE_DATA = 'RECEIVE_DATA'


export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
    return dispatch(fetchPosts(reddit))
}

const fetchPosts = (params) => dispatch => {
    return fetch(`http://gwapi.shhxzq.com/api/edu/list/banner?type=${params}`)
        .then(response => response.json())
        .then(json => dispatch(receiveData(json)))
}

export const receiveData= (list) => {
    return (
    {
        type: RECEIVE_DATA,
        list,
        receivedAt: Date.now()
    }
    )
}