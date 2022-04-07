import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
  number: number;
  onChangePage: (page: number) => void;
  isCurrent?: boolean;
}

export function PaginationItem({ number, onChangePage, isCurrent }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, isCurrent && styles.selected]}
      activeOpacity={0.65}
      onPress={() => onChangePage(number)}
    >
      <Text style={styles.containerItem}>{number}</Text>
    </TouchableOpacity>
  );
}