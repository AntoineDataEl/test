import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isUserLogged: false,
    user: null,
    tokens: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn(state, action) {
            state.tokens = action.payload;
            state.isUserLogged = true;
        },
        userUpdateData(state, action) {
            state.user = action.payload;
        },
        userLogout() {
            return initialState;
        },
    },
});

export const { userLoggedIn, userUpdateData, userLogout } = authSlice.actions;
export default authSlice.reducer;
