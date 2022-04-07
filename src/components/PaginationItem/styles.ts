import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 36,
    backgroundColor: COLORS.DARK_SECONDARY,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },

  selected: {
    backgroundColor: COLORS.RED,
  },

  containerItem: {
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
  },
});