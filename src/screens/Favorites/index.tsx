import { Text, View } from "react-native";
import { Layout } from "../../components/Layout";

export function Favorites() {
  return (
    <Layout showHeader={true}>
      <View>
        <Text>Favoritos</Text>
      </View>
    </Layout>
  );
}