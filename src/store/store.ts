import { configureStore } from "@reduxjs/toolkit";
import phoneViewReducer from "./res/isPhoneView";
import contentReducer from "./res/cardContents";
import coreContentsData from "./res/coreContents";

const store = configureStore({
    reducer: {
        isphoneview: phoneViewReducer,
        _contents: contentReducer,
        _coreContents: coreContentsData
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;