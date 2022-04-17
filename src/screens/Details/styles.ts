import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    
  },

  back: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  back_text: {
    marginLeft: 10,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    marginRight: 12,
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

  cast: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  cast_header: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 6,
  },

  cast_image: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },

  overview: {
    paddingHorizontal: 16,
  },

  overview_header: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.WHITE,
    fontSize: 14,
    marginBottom: 6,
  },

  overview_content: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    fontSize: 12,
    lineHeight: 18,
  },
});