import { Image, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { styles } from "./styles";

import IconGoogle from "../../assets/icons/google.png";

export function Header() {
  return (
    <View style={styles.container}>
      <Entypo name="clapperboard" size={24} color={COLORS.RED} />

      <TouchableOpacity style={styles.signInButton} activeOpacity={0.80}>
        <Image
          style={styles.signInButtonImage}
          source={IconGoogle}
        />

        <Text style={styles.signInButtonText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}