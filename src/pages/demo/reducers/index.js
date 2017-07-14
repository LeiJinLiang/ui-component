const initialState = {
    text : 'Hello'
}

export const Demo = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text : state.text == 'Hello'?'Stark':'Hello'
            }
        case 'BUTTON_CLICK':
            return {
                text : state.text === '000'?'U just click btn' : '000'
            }
        default:
            return {
                text : 'Hello'
            }
    }
}
