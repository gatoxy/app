import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  
  points: {
    fontFamily: FONTS.BOLD,
    fontSize: 12,
    color: COLORS.WHITE,
    alignSelf: "flex-end",
  },
});