import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:[],
    reducers: {
        addUsers: (state, action) => {
            state.push(action.payload)
        },
        removeUser:(state, action) => {
            state.splice(action.payload, 1)
        },
        deleteUsers:(state, action) => {
            state.splice(0, state.length)
        }
    }
});

export default userSlice.reducer ;
export const {addUsers, removeUser, deleteUsers} = userSlice.actions ;