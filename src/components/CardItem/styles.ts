import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  containerVertical: {
    marginHorizontal: 4,
  },

  containerHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
  },

  posterImage: {
    width: 110,
    height: 165,
  },

  backdropImage: {
    width: 80,
    height: 45,
    marginRight: 8,
  },

  row: {
    flexDirection: "row",
    flex: 1,
  },

  summary: {
    flex: 1,
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
    height: 34,
    width: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 34,
    backgroundColor: COLORS.DARK_SECONDARY,
    marginLeft: 8,
  },
});