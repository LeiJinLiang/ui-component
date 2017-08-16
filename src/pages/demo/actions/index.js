const CHANGE_TEXT = 'CHANGE_TEXT'
const BUTTON_CLICK = 'BUTTON_CLICK'
const MOCK_DATA = 'MOCK_DATA'
export const changeText = () => (
{ type : CHANGE_TEXT}
)

export const buttonClick = () => (
{ type : BUTTON_CLICK}
)


export const fetchData = (params) => dispatch => {
    return fetch(`http://10.199.73.113:8080/`)
        .then(response => response.json())
        .then(json => dispatch(mockData(json)))
}

const mockData = (data) => ({
    type: MOCK_DATA,
    data : data
})