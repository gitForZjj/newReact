import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: '这是header'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'change_state':
            return state.set('title', action.title)
        default: 
            return state;
    }
}