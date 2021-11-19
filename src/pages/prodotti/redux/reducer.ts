import { createReducer } from "@reduxjs/toolkit";
import { getProdottiAction } from "./actions";
import { ProdottiReducerType } from "./types";

const initialState: ProdottiReducerType = {
    prodotti: []
};

export const prodottiReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getProdottiAction.fulfilled, (state, action) => {
            state.prodotti = action.payload;
        })
});