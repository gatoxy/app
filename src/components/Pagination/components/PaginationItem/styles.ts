import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 36,
    backgroundColor: COLORS.DARK_SECONDARY,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },

  selected: {
    backgroundColor: COLORS.PURPLE,
  },

  text: {
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
  },
});