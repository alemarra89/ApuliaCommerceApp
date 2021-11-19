import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { TabType } from "../../App";

type Props = BottomTabScreenProps<TabType, "Aggiungi">;

const AggiungiScreen: React.FC<Props> = (props: Props) => {
    return (
        <View>
            <Text>Pagina con form per aggiunta prodotto</Text>
        </View>
    )
}

export default AggiungiScreen;