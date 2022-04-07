import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 64,
  },

  navbarItem: {
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    width: 84,
  },

  navbarItemText: {
    marginTop: 4,
    alignItems: "center",
    color: COLORS.GRAY,
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
});