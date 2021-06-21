// 使用redux的hooks,函数式组件可以采用这种方式
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/actions/loginAction';
function TestReduxHook () {
  const count = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <div> count: {count}</div>
      <button onClick={() => dispatch(add())}>按钮+1</button>
    </div>
  )

}
export default TestReduxHook;
