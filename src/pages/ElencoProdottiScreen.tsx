import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { StackType } from "../../App";
import { Product } from "../model/Product";

type Props = NativeStackScreenProps<StackType, "ElencoProdotti">;

const ElencoProdottiScreen: React.FC<Props> = (props: Props) => {

    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://10.0.2.2:3004/products").then(async (response: Response) => {
            const prodotti: Product[] = await response.json();
            setData(prodotti);
        });
    }, []);

    const goToDettaglio = (item: Product) => {
        props.navigation.navigate("DettaglioProdotto", { prodotto: item });
    }

    const renderItem = ({ item }: { item: Product }) => {
        return (
            <TouchableOpacity onPress={() => goToDettaglio(item)}>
                <View>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <Text>Pagina con elenco prodotti</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ElencoProdottiScreen;