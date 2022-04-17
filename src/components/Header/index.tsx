import { Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mediafy<Text style={styles.dote}>.</Text></Text>
    </View>
  );
}