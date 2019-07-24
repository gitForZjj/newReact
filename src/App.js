import React from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
// import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    // 使用了池子的组件必须放在provider中
    <Provider store={store}> 
      <div className="App">
        <Header>
        </Header>
        {/* <BrowserRouter> */}
        {/* exact 只显示一个路由 */}
          {/* <Route to='/' exact component={页面}></Route> */}
        {/* </BrowserRouter> */}
      </div>
    </Provider>
    
  );
}

export default App;
