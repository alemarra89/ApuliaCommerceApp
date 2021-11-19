import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";
import { TabType } from "../../App";

type Props = BottomTabScreenProps<TabType, "Home">;

const HomeScreen: React.FC<Props> = (props: Props) => {
    return (
        <View>
            <Text>Homepage</Text>
        </View>
    )
}

export default HomeScreen;