import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import myImage from "../assets/chowmin.png";
import { Button } from "@react-native-material/core";

export default function Card({ children, rate, image }) {
  let rateFull = rate.full.toString()
  let rateHalf = rate.half.toString()
  console.log(rateFull,rateHalf);
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={{ fontSize: 20 }}> {children}</Text>
        <Text style={{ fontSize: 20 }}> meal is here</Text>
        <Image source={{ uri: image }} style={{ height: 200, width: 300 }} />
      </View>
      <View>
        {rate.half ? (
          <Button
            style={{
              width: 200,
              marginTop: 10,
              marginBottom: 20,
              marginStart: 10,
            }}
            title={`Rs ${rateHalf} half `}
            color="#24af82"
            tintColor="white"
          />
        ) : null}
      </View>
      {rate.full ? (
        <Button
          style={{
            width: 200,
            marginTop: 10,
            marginBottom: 20,
            marginStart: 10,
          }}
          title={`Rs ${rateFull} full `}
          color="#24af82"
          tintColor="white"
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    elevation: 3,
    backgroundColor: "#eedbcb",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowRadius: 2,
    marginHorizontal: 6,
    marginStart: 16,
    marginVertical: 6,
    margin:20
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
