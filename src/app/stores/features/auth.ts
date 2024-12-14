import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean,
    username: string,
    isModerator: boolean
}

interface InitialState {
    value: AuthState
}

const initialState: InitialState = {
    value: {
        isAuth: false,
        username: "",
        isModerator: false
    }
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        login: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    isModerator: false
                }
            }
        },

        toogleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator
        }
    }
})


export const { login, logOut, toogleModerator } = auth.actions;
export default auth.reducer;