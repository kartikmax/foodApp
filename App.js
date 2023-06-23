import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Data from "./Food.json";
import Card from "./Custom/Card";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const iconSize = 35;

export default function App() {
  return (
    <SafeAreaProvider>
      <>
        <AppBar title="MA foodWala" style={styles.navbar} />
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "#ffdb70",
              padding: 10,
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 40, padding: 5 }}>Our menu</Text>
          </View>
          <StatusBar style="auto" />
          <SafeAreaView style={{ flex: 1, marginBottom: 60 }}>
            <FlatList
              data={Data}
              renderItem={({ item }) => (
                <Card children={item.food} rate={item.rate} image={item.image} />
              )}
              keyExtractor={(item) => item}
            />
          </SafeAreaView>
          <AppBar variant="bottom" style={styles.bottomAppBar} color="pink">
            <IconButton
              icon={<Icon name="home" size={iconSize} />}
              style={{ position: "absolute", left: 60 }}
            />
            <FAB
              icon={<Icon name="cart" size={28} />}
              style={{
                position: "absolute",
                top: -28,
                alignSelf: "center",
                backgroundColor: "#9dc183",
              }}
            />
            <IconButton
              icon={<Icon name="menu" size={iconSize} />}
              style={{ position: "absolute", right: 60 }}
            />
          </AppBar>
        </View>
      </>
    </SafeAreaProvider>
  );
}

const myblue = "#af9209";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f78571",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  navbar: {
    marginTop: 22,
  },
  bottomAppBar: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: 0,
  },
});
