import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TabType } from "../../App";
import { useAppDispatch, useAppSelector } from "../redux";
import { addProdottiAction, resetFormAction } from "./prodotti/redux/actions";
import { aggiuntaProdottoSelector } from "./prodotti/redux/selectors";

type Props = BottomTabScreenProps<TabType, "Aggiungi">;

const AggiungiScreen: React.FC<Props> = (props: Props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetFormAction());
    }, []);

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [photo, setPhoto] = useState<string>('');

    const aggiungiProdotto = () => {
        dispatch(addProdottiAction({
            photo,
            price: Number(price),
            name,
            description
        }));
    };

    const aggiuntaProdottoConSuccesso = useAppSelector(aggiuntaProdottoSelector);

    const aggiungiNuovoProdotto = () => {
        dispatch(resetFormAction());
        setName('');
        setDescription('');
        setPhoto('');
        setPrice('');
    }

    return (
        <View>
            <Text>Pagina con form per aggiunta prodotto</Text>

            {aggiuntaProdottoConSuccesso && (
                <>
                    <Text style={{ color: 'green', fontSize: 40 }}>PRODOTTO AGGIUNTO CON SUCCESSO</Text>
                    <Button title="Aggiungi nuovo prodotto" onPress={aggiungiNuovoProdotto} />
                </>
            )}

            {!aggiuntaProdottoConSuccesso && (
                <>
                    <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nome prodotto" />
                    <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Descrizione prodotto" />
                    <TextInput style={styles.input} value={price} onChangeText={setPrice} placeholder="Prezzo prodotto" keyboardType="numeric" />
                    <TextInput style={styles.input} value={photo} onChangeText={setPhoto} placeholder="URL immagine prodotto" />
                    <Button title="Aggiungi" onPress={aggiungiProdotto} disabled={!name || !description || !photo || !price} />
                </>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderColor: '#CCC',
        borderWidth: 1
    }
})

export default AggiungiScreen;