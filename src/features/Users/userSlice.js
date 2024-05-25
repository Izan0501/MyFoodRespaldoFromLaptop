import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            user: null,
            token: null,
            localId: null,
            imageLibrary: null,
        }
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.value.user = payload.email
            state.value.token = payload.idToken
            state.value.localId = payload.localId       
        },
        clearUser: (state) => {
            state.value.user = null
            state.value.token = null
        },
        setLibraryImage: (state, {payload}) => {
            state.value.imageLibrary = payload
        }
    }
})

export const { setUser, clearUser, setLibraryImage } = authSlice.actions

export default authSlice.reducer