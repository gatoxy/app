import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 6,
  },

  center: {
    justifyContent: "center",
    flex: 1,
  },

  text: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
    fontSize: 12,
  },
});