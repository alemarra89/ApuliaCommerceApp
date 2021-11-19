import { createReducer } from "@reduxjs/toolkit";
import { addProdottiAction, getProdottiAction, resetFormAction } from "./actions";
import { ProdottiReducerType } from "./types";

const initialState: ProdottiReducerType = {
    prodotti: [],
    addOk: false
};

export const prodottiReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getProdottiAction.fulfilled, (state, action) => {
            state.prodotti = action.payload;
        })
        .addCase(addProdottiAction.fulfilled, (state, action) => {
            state.addOk = action.payload;
        })
        .addCase(resetFormAction, (state) => {
            state.addOk = initialState.addOk;
        })
});