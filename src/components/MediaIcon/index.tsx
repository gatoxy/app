import { Text, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

interface Props {
  type: string;
}

export function MediaIcon({ type }: Props) {
  if (type === "movie") {
    return (
      <View style={styles.container}>
        <Ionicons name="film-outline" size={10} color={COLORS.WHITE} />
        <Text style={styles.text}>Filme</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Ionicons name="ios-tv-outline" size={10} color={COLORS.WHITE} />
      <Text style={styles.text}>Série</Text>
    </View>
  );
}