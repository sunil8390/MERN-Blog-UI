import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  User: [],
}


export const userSlice  = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SetUser: (state, {payload})=>{
            state.User = payload;
        }
    },

})

export const {SetUser} = userSlice.actions;
export const getUser = (state)=> state.user.User;
export default userSlice.reducer;