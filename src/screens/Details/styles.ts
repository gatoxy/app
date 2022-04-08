import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: "flex-start",
  },

  image: {
    width: "100%",
    height: 145,
    borderRadius: 8,
    marginBottom: 16,
  },

  year: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
    marginBottom: 8,
  },

  title: {
    fontSize: 18,
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
    marginBottom: 8,
  },

  overview: {
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
    marginBottom: 16,
  },

  button: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },

  buttonText: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    color: COLORS.DARK_SECONDARY,
    marginLeft: 12,
    lineHeight: 18,
  },

  buttonBack: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonBackText: {
    color: COLORS.GRAY,
    fontFamily: FONTS.REGULAR,
    marginLeft: 4,
  },
});