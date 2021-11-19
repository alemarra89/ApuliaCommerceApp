import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ReduxStackType } from "../../../App";
import { Product } from "../../model/Product";
import { useAppDispatch, useAppSelector } from "../../redux";
import { getProdottiAction } from "./redux/actions";
import { prodottiSelector } from "./redux/selectors";

type Props = NativeStackScreenProps<ReduxStackType, "ElencoProdottiRedux">;

const ElencoProdottiReduxScreen: React.FC<Props> = (props: Props) => {

    const dispatch = useAppDispatch();

    const data = useAppSelector(prodottiSelector);

    useEffect(() => {
        dispatch(getProdottiAction());
    }, []);

    const goToDettaglio = (item: Product) => {
        props.navigation.navigate("DettaglioProdottoRedux", { prodotto: item });
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
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}

export default ElencoProdottiReduxScreen;