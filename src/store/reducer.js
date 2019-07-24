import { combineReducers } from 'redux-immutable'; // 在redux-immutable中引入combineReducers，整合其他组件中的reducer
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({ // 整合并导出大的reduce
    header: headerReducer
})

export default reducer