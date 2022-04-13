import { Image, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { styles } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

import IconGoogle from "../../assets/icons/google.png";

export function Header() {
  const { signInWithGoogle, user } = useAuth();

  return (
    <View style={styles.container}>
      <Entypo name="clapperboard" size={24} color={COLORS.RED} />

      {user ? (
        <View
          style={styles.signOutContainer}
        >
          <TouchableOpacity
            style={styles.signOutButton}
            activeOpacity={0.80}
          >
            <Text style={styles.signOutButtonText}>Sair</Text>

            <Image
              style={styles.signOutButtonImage}
              source={{
                uri: user.picture
              }}
            />
          </TouchableOpacity>

          <Text style={styles.signOutEmail}>{user.email}</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.signInButton}
          activeOpacity={0.80}
          onPress={signInWithGoogle}
        >
          <Image
            style={styles.signInButtonImage}
            source={IconGoogle}
          />

          <Text style={styles.signInButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
      )}
    </View >
  );
}