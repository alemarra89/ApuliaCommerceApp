import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ReduxStackType } from "../../../App";
import { Product } from "../../model/Product";

type Props = NativeStackScreenProps<ReduxStackType, "DettaglioProdottoRedux">;

const DettaglioProdottoReduxScreen: React.FC<Props> = (props: Props) => {

    const prodotto: Product = props.route.params.prodotto;

    return (
        <View style={styles.container}>
            <Text>{prodotto.name}</Text>
            <View style={styles.imageContainer}>
                <Image source={{
                    uri: prodotto.photo,
                    width: 300,
                    height: 300
                }} style={{
                    borderRadius: 150
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

export default DettaglioProdottoReduxScreen;