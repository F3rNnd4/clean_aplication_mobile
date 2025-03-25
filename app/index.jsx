import { View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
    return (

        <ImageBackground
            source={{ uri: '' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}
        >

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
                <Text style={{fontWeight: "bold", fontSize: 25}}>Bem-Vindo á Página Inicial!</Text>
            </View>

        </ImageBackground>
    );
};