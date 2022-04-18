import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {

  },

  image: {
    width: "100%",
    height: 250,
  },

  title: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
    fontSize: 12,
    textAlign: "center",
    marginVertical: 8,
  },

  genres: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },

  genre_name: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.GRAY,
    fontSize: 12,
    marginHorizontal: 6,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  year: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
  },

  button: {
    marginHorizontal: 16,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },

  button_text: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.DARK_PRIMARY,
    fontSize: 12,
  },

  average: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
  },

  average_text: {
    marginLeft: 6,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
  },

  media: {
    flexDirection: "row",
    alignItems: "center",
  },

  media_text: {
    marginLeft: 6,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
  },
});