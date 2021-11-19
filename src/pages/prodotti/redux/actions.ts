import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../../model/Product";
import { ThunkApiConfig } from "../../../redux";

// createAsyncThunk<
// Product[], -> il tipo restituito
// void, -> il tipo del parametro in input (void = nessun parametro)
// ThunkApiConfig -> una cosa fissa
// >

export const getProdottiAction = createAsyncThunk<Product[], void, ThunkApiConfig>(
    'prodotti/getProdotti', async (_, { getState }) => {
        console.log('sto passando dalla action');
        const result = await fetch("http://10.0.2.2:3004/products");
        const prodotti: Product[] = await result.json();
        return prodotti;
    }
);
