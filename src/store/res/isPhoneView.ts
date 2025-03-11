import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateProps {
    isPhoneView: boolean;
}

const initialState: StateProps = {
    isPhoneView: false
};

const isPhoneViewSlice = createSlice({
    name: "isphoneview",
    initialState,
    reducers: {
        setIsPhoneView(state, action: PayloadAction<{result: boolean}>) {
            state.isPhoneView = action.payload.result;
        }
    }
});

export const { setIsPhoneView } = isPhoneViewSlice.actions;
export default isPhoneViewSlice.reducer;
