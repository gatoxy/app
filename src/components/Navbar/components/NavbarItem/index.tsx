import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  text: string;
  navigateTo: "Home" | "Movies" | "Series" | "Details" | "Favorites";
  children: ReactNode;
}

export function NavbarItem({ text, navigateTo, children }: Props) {
  const navigation = useNavigation();

  function onNavigation() {
    navigation.navigate(navigateTo);
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.75} onPress={onNavigation}>
      { children }
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}