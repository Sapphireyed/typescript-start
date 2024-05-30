import { useReducer } from "react";

const initialState = { count: 0};

type CounterState = { count: number}
type Action = {
  type: string
  payload: number
}

function reducer(state: CounterState, action: Action) {
  switch(action.type) {
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - action.payload}
    default: return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increase 10</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
    </div>
  )
}
