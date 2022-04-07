import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: COLORS.DARK_SECONDARY,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 4,
  },

  inputContainer: {
    flex: 1,
    color: COLORS.WHITE,
    fontSize: 14,
  },

  submitButton: {
  },
});