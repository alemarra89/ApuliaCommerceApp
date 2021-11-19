import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { StackType } from "../../App";
import { Product } from "../model/Product";

type Props = NativeStackScreenProps<StackType, "DettaglioProdotto">;

const DettaglioProdottoScreen: React.FC<Props> = (props: Props) => {

    const prodotto: Product = props.route.params.prodotto;

    return (
        <View style={styles.container}>
            <Text>{prodotto.name}</Text>
            <View style={styles.imageContainer}>
                <Image source={{
                    uri: prodotto.photo,
                    width: 200,
                    height: 200
                }} />
            </View>
            <Text>{prodotto.description}</Text>
            <Text>{prodotto.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    imageContainer: {
        alignItems: 'center'
    }
})

export default DettaglioProdottoScreen;