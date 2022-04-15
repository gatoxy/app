import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";
import { COLORS } from "../../theme";

export function Header() {
  return (
    <View style={styles.container}>
      <Entypo name="clapperboard" size={24} color={COLORS.RED} />
    </View>
  );
}