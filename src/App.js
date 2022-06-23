import "./App.css";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const CounterOperation = useCallback(
    (type, factor) => {
      const action = {
        type: type,
        factor: factor,
      };
      dispatch(action);
    },
    [dispatch]
  );
  const handleToggleState = () => {
    dispatch({
      type: "HANDLETOGGLESTATE",
    });
  };
  useEffect(
    () => () => () => CounterOperation("INCREASE", 4),
    [CounterOperation]
  );

  return (
    <div className="App">
      <button onClick={handleToggleState}>Toggle State</button>
      {state.showCounter && (
        <>
          <div className="counter">Counter: {state.counter} </div>
          <div>
            <button
              className="btn"
              onClick={() => CounterOperation("INCREASE", 5)}
            >
              increase
            </button>
            <button
              className="btn"
              onClick={() => CounterOperation("DECREASE", 5)}
            >
              decrease
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
