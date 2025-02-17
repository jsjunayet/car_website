import { createSlice } from "@reduxjs/toolkit";

type Tauth = {
    user: string | null;
    token: string | null;
};
const initialState : Tauth={
    user:null,
    token:null
}


export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setuser:(state, action)=>{
            const {token, user}= action.payload;
            state.token = token;
            state.user=user
        },
        logout:(state)=>{
            state.token = null;
            state.user = null;
        }

    }
})
export const {setuser, logout}= authSlice.actions
export default authSlice.reducer