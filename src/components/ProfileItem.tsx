import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ProfileItemProps = {
  label: string;
  value: string;
};

export default function ProfileItem({ label, value }: ProfileItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  label: { fontWeight: "bold", color: "#555" },
  value: { marginTop: 5, fontSize: 16 },
});
