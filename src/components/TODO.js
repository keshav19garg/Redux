import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo, removeallTodo } from '../features/todo/todoSlice'

const TODO = () => {

  const show=useSelector((state)=>{return state.todoReducer.todos});
  const dispatch=useDispatch();


  return (<>
 {show.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              type="submit"
            >delete</button>
              <button
             onClick={() => dispatch(updateTodo({id:todo.id, text:"change kar diya bro"}))}
              type="submit"
            >update</button>
              </li>
              ))}
              <button
               type="submit"
             onClick={()=>dispatch(removeallTodo([]))}
            >Delete all</button>
        
  </>
  )
}

export default TODO