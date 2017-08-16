const initialState = {
    text : 'Hello',
    mock : {}
}

export const Demo = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text == 'Hello' ? 'Stark' : 'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: state.text == '0000' ? 'U just click button' : '0000'
            }
        case 'MOCK_DATA':
            return {
                text : state.text,
                mock : action.data || state.mock
            }
        default :
            return {
                text: 'Hello'
            }
    }
}