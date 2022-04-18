import { View } from "react-native";
import { styles } from "./styles";
import { NavbarItem } from "./components/NavbarItem";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

export function Navbar() {
  return (
    <View style={styles.container}>
      <NavbarItem navigateTo="Home" text="Início">
        <Ionicons name="ios-home-outline" size={18} color={COLORS.WHITE} />
      </NavbarItem>

      <NavbarItem navigateTo="Movies" text="Filmes">
        <Ionicons name="film-outline" size={18} color={COLORS.WHITE} />
      </NavbarItem>

      <NavbarItem navigateTo="Series" text="Séries">
        <Ionicons name="ios-tv-outline" size={18} color={COLORS.WHITE} />
      </NavbarItem>

      <NavbarItem navigateTo="Favorites" text="Lista">
        <Ionicons name="list" size={18} color={COLORS.WHITE} />
      </NavbarItem>
    </View>
  );
}