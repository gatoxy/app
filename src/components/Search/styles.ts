import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK_SECONDARY,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 16,
    marginBottom: 16,
    marginTop: 8,
  },

  input: {
    flex: 1,
    fontFamily: FONTS.REGULAR,
    fontSize: 12,
    color: COLORS.WHITE,
  },

  button: {
    marginRight: 16,
  },
});