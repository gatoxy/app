import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "center",
  },

  points: {
    fontSize: 12,
    color: COLORS.GRAY,
    fontFamily: FONTS.BOLD,
    alignSelf: "flex-end",
  },
});