import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type ChatBubbleProps = {
  message: string;
  isMe: boolean;
  avatar?: any; // optional avatar image
  timestamp?: string;
};

export default function ChatBubble({ message, isMe, avatar, timestamp }: ChatBubbleProps) {
  return (
    <View
      style={[
        styles.container,
        { flexDirection: isMe ? "row-reverse" : "row", alignSelf: isMe ? "flex-end" : "flex-start" },
      ]}
    >
      {avatar && <Image source={avatar} style={styles.avatar} />}
      <View style={[styles.bubble, { backgroundColor: isMe ? "#007aff" : "#e5e5e5" }]}>
        <Text style={{ color: isMe ? "#fff" : "#000" }}>{message}</Text>
        {timestamp && <Text style={styles.timestamp}>{timestamp}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    maxWidth: "80%",
    alignItems: "flex-end",
  },
  bubble: {
    padding: 10,
    borderRadius: 15,
  },
  avatar: { width: 32, height: 32, borderRadius: 16, marginHorizontal: 8 },
  timestamp: { fontSize: 10, color: "#888", marginTop: 4, textAlign: "right" },
});
