import {  configureStore, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
    token: "",
    firstName: "",
    lastName: "",
    modificationRequested:"off",
    },

    reducers: {
        userToken: (state, action) => {
            state.token = action.payload;
        },

        userFirstName: (state, action) => {
            state.firstName = action.payload;
        },

        userLastName: (state, action) => {
            state.lastName = action.payload;
        },

        userNameModification: (state, action) => {
            state.modificationRequested = action.payload;
        }
    },
});

export const {userToken, userFirstName, userLastName, userNameModification} = userSlice.actions;

export const store= configureStore({
    reducer: {
        user:userSlice.reducer
    }
});