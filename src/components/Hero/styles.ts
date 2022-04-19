import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 335,
  },

  row: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    bottom: 0,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
    fontSize: 12,
  },

  button: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 6,
    marginRight: 12,
    flexDirection: "row",
  },

  button_text: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 12,
    color: COLORS.DARK_PRIMARY,
    marginLeft: 6,
  },
});