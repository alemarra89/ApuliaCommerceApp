import { createSelector } from "reselect";
import { Product } from "../../../model/Product";
import { RootState } from "../../../redux";
import { ProdottiReducerType } from "./types";

const prodottiReducer = (state: RootState): ProdottiReducerType => state.prodotti;

export const prodottiSelector = createSelector(
    prodottiReducer,
    (state: ProdottiReducerType): Product[] => state.prodotti
);

export const aggiuntaProdottoSelector = createSelector(
    prodottiReducer,
    (state: ProdottiReducerType): boolean => state.addOk
);
