import { TouchableOpacity, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";
import { COLORS } from "../../theme";
import { useState } from "react";

interface Props {
  placeholder: string;
  onSearch: (query: string) => void;
}

export function Search({ placeholder, onSearch }: Props) {
  const [searchInput, setSearchInput] = useState<string>("");

  function onSubmit() {
    onSearch(searchInput);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.75} onPress={onSubmit}>
        <FontAwesome name="search" size={18} color={COLORS.GRAY} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.WHITE}
        onChangeText={text => setSearchInput(text)}
      />
    </View>
  );
}