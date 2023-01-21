import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Food({ info }) {
  return (
    <View tyle={styles.container}>
      <Text style={{ fontSize: 20 }}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#803fae",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 30,
    // margin: 300,
  },
  navbar: {
    marginTop: 22,
  },
});
