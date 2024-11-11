import React, {useReducer} from 'react'

const recuder = (state, action) =>{
  switch (action.type) {
    case "Increment":
      return {...state, count : state.count + 1}
    case "ToggleText":
      return {...state, showText: !state.showText}
    default:
      return state
  }
}


const ReducerDemo = () => {
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);

  const [state, dispatch] = useReducer(recuder, {count: 0 , showText: true})

  return (
    <div>
    <h1>{state.count}</h1>
    <button
      onClick={() => {

        dispatch({type:"Increment"});
        dispatch({type: "ToggleText"})
        // setCount(prevState => prevState + 1);
        // setShowText(!showText)

      }}
    >
      Click Here
    </button>

    {state.showText && <p>Hello Galaxy</p>}
  </div>
  )
}

export default ReducerDemo