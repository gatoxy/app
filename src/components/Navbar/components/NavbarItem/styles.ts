import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 82,
  },

  text: {
    marginTop: 4,
    alignItems: "center",
    color: COLORS.GRAY,
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
});