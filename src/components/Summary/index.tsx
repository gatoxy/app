import { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { useApp } from "../../contexts/AppContext";
import { useNavigation } from "@react-navigation/native";

export function Summary() {
  const { modalizeRef, itemSelected } = useApp();

  const navigation = useNavigation();

  const { onCloseSummary } = useApp();

  function navigateToDetails() {
    navigation.navigate("Details", {
      itemSelected
    });
  }

  return (
    <Modalize
      ref={modalizeRef}
      snapPoint={235}
      withHandle={false}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBody}>
          <Image
            style={styles.modalImage}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${itemSelected.poster_path}`
            }}
          />

          <View style={styles.modalSummary}>
            <Text style={styles.modalSummaryTitle} numberOfLines={1} ellipsizeMode="tail">{itemSelected.title}</Text>

            <View style={styles.modalSummaryRow}>
              <Text style={styles.year}>
                {new Date(itemSelected.release_date).getFullYear()}
              </Text>
              <Text style={styles.category}>{itemSelected.type === "movie" ? "Filme" : "Série"}</Text>
              <Text style={styles.average}>{itemSelected.vote_average}</Text>
            </View>

            <Text style={styles.modalSummaryDescription} numberOfLines={4} ellipsizeMode="tail">
              {itemSelected.overview}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.modalButton}
          activeOpacity={0.60}
          onPress={navigateToDetails}
        >
          <Ionicons name="information-circle-outline" size={24} color={COLORS.WHITE} />
          <Text style={styles.modalButtonText}>Ver mais informações</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
}