import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: COLORS.DARK_SECONDARY,
  },

  container: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: COLORS.DARK_SECONDARY,
  },

  body: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },

  image: {
    width: 100,
    height: 150,
    borderRadius: 4,
    marginRight: 12,
  },

  content: {
    flex: 1,
  },
  
  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  year: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
  },

  description: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    lineHeight: 16,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
  },

  button_text: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    marginLeft: 10,
  },
});