import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },

  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 16,
  },

  title_small: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 10,
  },
});