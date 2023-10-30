import { decrement, decrementByAmount, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const { count } = useAppSelector(state => state.couter);
  const dispatch = useAppDispatch()

  return (
    <>
      <h1 className='text-5xl font-semibold text-center text-green-400'>Arnab Shikder</h1>
      <div className='flex items-center justify-center my-10'>
        <div className='flex items-center gap-4'>
          <button onClick={() => dispatch(decrement())}  className='border border-red-500 px-3 text-2xl py-2 rounded font-semibold'>-</button>
          <button onClick={() => dispatch(decrementByAmount(5))}  className='border border-red-500 px-3 text-2xl py-2 rounded font-semibold'>-5</button>
          <p className='text-lg'>{count}</p>
          <button onClick={() => dispatch(incrementByAmount(5))} className='border border-green-500 px-3 text-2xl py-2 rounded font-semibold'>+5</button>
          <button onClick={() => dispatch(increment())} className='border border-green-500 px-3 text-2xl py-2 rounded font-semibold'>+</button>
        </div>
      </div>
    </>
  )
}

export default App
