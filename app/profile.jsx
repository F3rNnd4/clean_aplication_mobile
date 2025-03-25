import { View, Text, Image, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
    return (
        <ImageBackground
            source={{ uri: '' }}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            imageStyle={{ opacity: 0.5 }}
        >
            <View style={{ alignItems: "center", gap: 25, padding: 20, backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 24 }}>
                <Image
                    source={{ uri: '' }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}></Text>
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}></Text>
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}></Text>
                <Text style={{ backgroundColor: "#FDFEFF", padding: 8, borderRadius: 24, width: 264 }}></Text>
            </View>
        </ImageBackground>
    );
}