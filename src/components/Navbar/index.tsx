import { Text, TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { COLORS } from "../../theme";

export function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navbar_item} activeOpacity={0.75} onPress={() => navigation.navigate("Home")}>
        <Fontisto name="home" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbar_item_text}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navbar_item} activeOpacity={0.75} onPress={() => navigation.navigate("Movies")}>
        <MaterialCommunityIcons name="filmstrip" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbar_item_text}>Filmes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navbar_item} activeOpacity={0.75} onPress={() => navigation.navigate("Series")}>
        <Ionicons name="tv" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbar_item_text}>Séries</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navbar_item} activeOpacity={0.75} onPress={() => navigation.navigate("Favorites")}>
        <FontAwesome name="bookmark" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbar_item_text}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}