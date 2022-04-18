import { ActivityIndicator } from "react-native";
import { COLORS } from "../../theme";

export function Loading() {
  return (
    <ActivityIndicator size={"small"} color={COLORS.DARK_SECONDARY} />
  );
}