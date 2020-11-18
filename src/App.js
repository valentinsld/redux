import {
  useDispatch,
  useSelector
} from 'react-redux';

import { set_number } from './actions/actions-types';

const App = () => {
  const { message, number} = useSelector(state => state);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value : number } = e.target;

    dispatch(set_number(number));
  }

  return (
    <div className="App">
      <p>{message}</p>
      <p>Number : {number}</p>
      <input type="text" value={number} name="number" onChange={handleChange} />
    </div>
  );
}

export default App;