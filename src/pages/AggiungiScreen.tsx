import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TabType } from "../../App";

type Props = BottomTabScreenProps<TabType, "Aggiungi">;

const AggiungiScreen: React.FC<Props> = (props: Props) => {

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [photo, setPhoto] = useState<string>('');

    const aggiungiProdotto = () => {
        fetch("http://10.0.2.2:3004/products", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                description: description,
                photo,
                price: Number(price)
            })
        })
    };

    return (
        <View>
            <Text>Pagina con form per aggiunta prodotto</Text>

            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nome prodotto" />
            <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Descrizione prodotto" />
            <TextInput style={styles.input} value={price} onChangeText={setPrice} placeholder="Prezzo prodotto" keyboardType="numeric" />
            <TextInput style={styles.input} value={photo} onChangeText={setPhoto} placeholder="URL immagine prodotto" />

            <Button title="Aggiungi" onPress={aggiungiProdotto} disabled={!name || !description || !photo || !price} />
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