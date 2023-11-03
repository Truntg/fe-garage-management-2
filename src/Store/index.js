
import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./reducers/service";
import ownerReducer from "./reducers/owner";
export const store = configureStore({
    reducer: {
        service: serviceReducer,
        owner: ownerReducer
    }
})