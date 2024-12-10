import React from 'react'
import { useCounter } from './useCounter'

export const CounterHookExample = () => {
    const [count, inc, dec] = useCounter()
    return (
        <>
            <div>{count}</div>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </>
    )
}
