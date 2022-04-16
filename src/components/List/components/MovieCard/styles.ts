import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 65,
    borderRadius: 8,
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  title: {
    fontFamily: FONTS.BOLD,
    color: COLORS.WHITE,
    fontSize: 12,
  },

  row: {
    flexDirection: "row",
    marginVertical: 4,
  },

  year: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    marginRight: 12,
  },

  average: {
    flexDirection: "row",
    alignItems: "center",
  },

  average_text: {
    marginLeft: 6,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
  },

  genres: {
    flexDirection: "row",
  },

  genre_name: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
    fontSize: 12,
    marginRight: 12,
  },
});