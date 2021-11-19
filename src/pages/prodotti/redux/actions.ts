import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
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

export const addProdottiAction = createAsyncThunk<boolean, Omit<Product, 'id'>, ThunkApiConfig>(
    'prodotti/addProdotti', async (prodotto, { getState }) => {
        const result = await fetch("http://10.0.2.2:3004/products", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: prodotto.name,
                description: prodotto.description,
                photo: prodotto.photo,
                price: Number(prodotto.price)
            })
        });
        return result.ok;
    }
);

export const resetFormAction = createAction<void, 'prodotti/resetForm'>('prodotti/resetForm');

