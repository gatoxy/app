import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {

  },

  image: {
    width: "100%",
    height: 250,
  },

  summary: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
    bottom: 60,
    marginBottom: -60,
  },

  poster: {
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
    marginBottom: 6,
  },

  year: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
  },

  genres: {
    flexDirection: "row",
    marginBottom: 8,
  },

  genre_name: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
    fontSize: 12,
    marginRight: 12,
  },

  duration: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    marginRight: 12,
  },
});