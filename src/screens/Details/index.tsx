import { Image, Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../components/Layout";
import { styles } from "./styles";
import { COLORS } from "../../theme";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface Props {
  route: any;
}

export function Details({ route }: Props) {
  const { itemSelected: item } = route.params;

  const navigation = useNavigation();

  return (
    <Layout>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonBack}
          activeOpacity={0.75}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={12} color={COLORS.GRAY} />
          <Text style={styles.buttonBackText}>Voltar</Text>
        </TouchableOpacity>

        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
          }}
        />

        <Text style={styles.year}>{new Date(item.release_date).getFullYear()}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.overview}>{item.overview}</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.75}>
          <FontAwesome name="bookmark-o" size={16} color={COLORS.DARK_SECONDARY} />
          <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}