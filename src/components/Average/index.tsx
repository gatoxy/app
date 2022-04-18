import { Text, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../theme";

interface Props {
  vote_average: number;
}

export function Average({ vote_average }: Props) {
  return (
    <View style={styles.container}>
      <FontAwesome name="star" size={10} color={COLORS.YELLOW} />
      <Text style={styles.text}>{vote_average}</Text>
    </View>
  );
}