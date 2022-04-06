import { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { useApp } from "../../contexts/AppContext";

export function Summary() {
  const { modalizeRef, mediaSelected } = useApp();

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
              uri: `https://image.tmdb.org/t/p/w500/${mediaSelected?.poster_path}`
            }}
          />

          <View style={styles.modalSummary}>
            <Text style={styles.modalSummaryTitle}>{mediaSelected?.title}</Text>

            <View style={styles.modalSummaryRow}>
              <Text style={styles.year}>
                {mediaSelected && new Date(mediaSelected.release_date).getFullYear()}
              </Text>
              <Text style={styles.category}>{mediaSelected?.type === "movie" ? "Filme" : "Série"}</Text>
              <Text style={styles.average}>{mediaSelected?.vote_average}</Text>
            </View>

            <Text style={styles.modalSummaryDescription} numberOfLines={4} ellipsizeMode="tail">
              {mediaSelected?.overview}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.modalButton} activeOpacity={0.60}>
          <Ionicons name="information-circle-outline" size={24} color={COLORS.WHITE} />
          <Text style={styles.modalButtonText}>Ver mais informações</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
}