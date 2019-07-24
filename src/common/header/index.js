import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {

        const {titles} = this.props

        return(
            <div>{titles}</div> 
        )
    }
}

// 获取池子reducer中的数据
const mapState = (state) => ({ 
    titles: state.getIn(['header', 'title'])
})

// 创建方法派发dispatch(action)
const mapDispatch = (dispatch) => ({
    changeState() {
        const action = {
            type: 'change_state',
            title: '这是Header'
        }
        dispatch(action)
    }
})

// 关联池子与组件并输出
export default connect(mapState, mapDispatch)(Header);