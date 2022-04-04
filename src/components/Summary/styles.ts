import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.DARK_SECONDARY,
    flex: 1,
    height: 235,
  },

  modalBody: {
    flexDirection: "row",
    padding: 12,
  },

  modalImage: {
    width: 100,
    height: 150,
    marginRight: 12,
  },

  modalSummary: {
    flex: 1,
  },

  modalSummaryTitle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.BOLD,
    fontSize: 18,
  },

  modalSummaryDescription: {
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
    lineHeight: 18,
  },

  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.1)",
  },

  modalButtonText: {
    color: COLORS.WHITE,
    fontSize: 14,
    marginLeft: 12,
  },
});