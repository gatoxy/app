import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },

  text: {
    marginLeft: 6,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
  },
});