import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { prodottiReducer } from "../pages/prodotti/redux/reducer";

export const store = configureStore({
    reducer: {
        prodotti: prodottiReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface ThunkApiConfig {
    state: RootState
}