import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: "flex-start",
  },

  title: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 6,
  },

  image: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
});