import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 4,
    flex: 1,
  },

  posterImage: {
    width: 110,
    height: 165,
  },

  backdropImage: {
    width: 80,
    height: 45,
    marginRight: 10,
    borderRadius: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  summary: {

  },

  summaryTitle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: 14,
  },

  summaryBody: {
    flexDirection: "row",
    alignItems: "center",
  },

  year: {
    color: COLORS.GRAY,
    fontSize: 14,
  },

  media: {
    marginHorizontal: 12,
  },

  average: {
    color: COLORS.GRAY,
    fontSize: 14,
  },

  bookmarkButton: {
    height: 36,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 36,
    backgroundColor: COLORS.DARK_SECONDARY,
  },
});