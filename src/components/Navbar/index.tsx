import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../theme";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navbarItem} activeOpacity={0.50}>
        <Fontisto name="home" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbarItemText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navbarItem} activeOpacity={0.50}>
        <MaterialCommunityIcons name="filmstrip" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbarItemText}>Filmes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navbarItem} activeOpacity={0.50}>
        <Ionicons name="tv" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbarItemText}>Séries</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navbarItem} activeOpacity={0.50}>
        <FontAwesome name="bookmark" size={18} color={COLORS.GRAY} />
        <Text style={styles.navbarItemText}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}