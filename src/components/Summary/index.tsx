import { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../theme";

export function Summary() {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

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
                uri: "https://image.tmdb.org/t/p/w500//abPQVYyNfVuGoFUfGVhlNecu0QG.jpg"
              }}
            />

            <View style={styles.modalSummary}>
              <Text style={styles.modalSummaryTitle}>Trivia Quest</Text>
              <Text style={styles.modalSummaryDescription} numberOfLines={4} ellipsizeMode="tail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae soluta facere, natus animi ipsam nesciunt explicabo recusandae distinctio earum eaque harum. Commodi eligendi alias recusandae ut, cupiditate quos ducimus?
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.modalButton} activeOpacity={0.60}>
            <Ionicons name="information-circle-outline" size={24} color={COLORS.WHITE} />
            <Text style={styles.modalButtonText}>Ver mais informações</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </>
  );
}