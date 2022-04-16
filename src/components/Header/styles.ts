import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.DARK_PRIMARY,
  },

  text: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    color: COLORS.WHITE,
  },

  dote: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    color: COLORS.PURPLE,
  },
});