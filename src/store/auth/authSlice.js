import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  date: null,

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    isLoading: (state) => {

        state.isLoading = !state.isLoading

    },

    setUser: (state,action) => {

        state.user = action.payload
        state.isAuthenticated = true
        state.date = new Date()

    },

    logout: (state) => {

        state.user = null
        state.isAuthenticated = false
        state.date = null
        state.isLoading = false

    }

  },
})

// Action creators are generated for each case reducer function
export const { isLoading, setUser, logout } = authSlice.actions

export default authSlice.reducer