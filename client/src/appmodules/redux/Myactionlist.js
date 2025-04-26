import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 50,
  age:10,
  phone:'545787'
}

export const myslicer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      customage: (state)=>{
        state.age +=10
      }
    }
  })
  

  export const { increment, decrement ,customage} = myslicer.actions
  
  export default myslicer.reducer