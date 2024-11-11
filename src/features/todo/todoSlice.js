import { createSlice,nanoid  } from "@reduxjs/toolkit";

const initialState={
    todos:[{id: 1, text: "Hello world"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState: initialState,
    reducers:{
      //idhar addtodo banane ki jagah action mei type bhi bhej sakte hain aur fir switch case lagake kar skte hai(refer documentation at redux toolkit website)
        addTodo:(state,action)=>{
            const todoe={
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todoe)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((t)=>t.id!=action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((todo) => {
              if (todo.id === action.payload.id) {
                todo.text = action.payload.text;
                return;
              }
            });
          },
          removeallTodo:(state,action)=>{
            state.todos=action.payload
          }
    }
})

export const {addTodo, removeTodo,updateTodo,removeallTodo} = todoSlice.actions
export default todoSlice.reducer