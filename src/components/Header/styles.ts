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
  },

  signOutContainer: {
    alignItems: "flex-end",
  },

  signOutEmail: {
    color: COLORS.GRAY,
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },

  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },

  signOutButtonText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 12,
    marginRight: 12,
  },

  signOutButtonImage: {
    height: 34,
    width: 34,
    borderRadius: 34,
  },
});