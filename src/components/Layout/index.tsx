import { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { styles } from "./styles";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />

        {children}
      </ScrollView>

      <Navbar />
    </View>
  );
}