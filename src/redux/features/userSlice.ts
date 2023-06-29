import { usersList } from '@/db/usersLIst'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserState {
  users: User[]
  loggedUser: User | null
  response: {
    status: boolean | null
    message: string | null
  }
}

const initialState: UserState = {
  users: usersList,
  loggedUser: null,
  response:{
    status: null,
    message: null
  },
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: state => {
        state.response.status = null
        state.response.message = null
    },
    register: (state, action: PayloadAction<FormRegister>) => {
        const found = state.users.find(user => user.email === action.payload.email)
        if(found){
          state.response.status = false
          state.response.message = 'Email already exists'
        }
        else {
           const newUser = {
            id: Math.random().toString(),
            ...action.payload,
            role: 'client',
           }
           state.users = [...state.users, newUser]
           state.loggedUser = newUser
        }},
    login: (state, action: PayloadAction<FormLogin>) => { 
        const found = state.users.find(user => user.email === action.payload.email)
        if(!found) {
            state.response.message = 'Email not found'
            state.response.status = false
        }
        else if(found) {
            if(found.password === action.payload.password){
            state.loggedUser = found
            state.response.message = 'logged'
          }
          else {
            state.response.status = false
            state.response.message = 'Wrong password'
          }
        }
    },
    logout: state => initialState
  },

})

// Action creators are generated for each case reducer function
export const { register, login } = user.actions

export default user.reducer