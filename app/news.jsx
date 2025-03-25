import { View, Text, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function News() {
    return (

        <ImageBackground
            source={{ uri: '' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 30, marginRight: 30, marginBottom: 15, color: "#191414" }}></Text>
                <Image
                    source={{ uri: '' }}
                    style={{ width: 400, height: 200 }}
                />
                
                <Text style={{ fontWeight: "bold", fontSize: 12, margin: 25, color: "#474b4e", textAlign: "center" }}></Text>

            </ View>
        </ImageBackground>
    );
}
