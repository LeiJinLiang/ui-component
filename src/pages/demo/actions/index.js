import axios from 'axios'

const CHANGE_TEXT = 'CHANGE_TEXT'
const BUTTON_CLICK = 'BUTTON_CLICK'
const MOCK_DATA = 'MOCK_DATA'
const POST_DATA = 'POST_DATA'
const DELETE_DATA = 'DELETE_DATA'




export const changeText = () => (
{ type : CHANGE_TEXT}
)

export const buttonClick = () => (
{ type : BUTTON_CLICK}
)



export const fetchData = (url) => dispatch => {
    return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(mockData(json)))
}


export const fetchPost = (url,data) =>  dispatch => {
    return axios.post(url,data)
        .then( res => dispatch(postData(res.data)))
}

export const fetchDelete = (url) => dispatch => {
    return axios({
        url : url,
        withCredentials: true,
        method : 'delete'
    }).then( res => dispatch(deleteData(res)))
}


const postData = (data) => {
    return {
        type : POST_DATA,
        data : data
    }
}

const mockData = (data) => ({
    type: MOCK_DATA,
    data : data
})

const deleteData = (data) => ({
    data : data,
    type : DELETE_DATA
})