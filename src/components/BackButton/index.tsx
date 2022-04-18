import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { COLORS } from "../../theme";

export function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.75}
      onPress={() => navigation.goBack()}
    >
      <FontAwesome name="angle-left" size={24} color={COLORS.WHITE} />
      <Text style={styles.text}>Voltar</Text>
    </TouchableOpacity>
  );
}