import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import './assets/style/index.scss';
// 可以利用这里的方法进行路由跳转
import { add } from './redux/actions/loginAction';
import { Button } from 'antd';

const mapStateToProps = (state) => {
	return {
		count: state.loginReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (...args) => dispatch(add(...args))
	};
};

// 装饰器
@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
	// constructor(props) {
	//   super(props)
	// }
	handleClick() {
		console.log(this.props);
	}
	render() {
    return <div >about
       <Button type="primary">Primary Button</Button>
    </div>;
	}
}

export default App;
