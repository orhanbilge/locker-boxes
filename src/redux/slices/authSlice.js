import { createSlice } from '@reduxjs/toolkit'
import users from '../../data/users.json'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isLoggedIn: localStorage.getItem('user') ? true : false,
      user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
      loginStatus: null
    },
    reducers: {
      login: (state, action) => {
        const user = users.find(data => data.email === action.payload.email);
        if(user) {
          state.isLoggedIn = true;
          state.user = user;
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          state.loginStatus = 'USER_ERROR';
        }
      },
      logout: (state, action) => {
        state.isLoggedIn = false;
        state.loginStatus = null;
        state.user = {};
        localStorage.removeItem("user");
      }
    }
  })

  export const { login, logout } = authSlice.actions
  export default authSlice.reducer