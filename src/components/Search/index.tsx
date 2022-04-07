import { TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
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
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholder}
        placeholderTextColor={COLORS.GRAY}
        onChangeText={text => setSearchInput(text)}
      />

      <TouchableOpacity style={styles.submitButton} activeOpacity={0.85} onPress={onSubmit}>
        <FontAwesome5 name="search" size={18} color={COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  );
}