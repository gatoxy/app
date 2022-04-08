import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
  },

  signInButton: {
    backgroundColor: COLORS.WHITE,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 2,
  },

  signInButtonImage: {
    height: 18,
    width: 18,
    marginRight: 12,
  },

  signInButtonText: {
    color: COLORS.DARK_SECONDARY,
    fontSize: 14,
  }
});