import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

type ChatItemProps = {
  chatId: string;
  chatName: string;
  lastMessage: string;
  isGroup?: boolean;
  avatar?: any;
  onPress: () => void;
};

export default function ChatItem({ chatId, chatName, lastMessage, isGroup, avatar, onPress }: ChatItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {avatar && <Image source={avatar} style={styles.avatar} />}
      <View style={styles.content}>
        <Text style={styles.name}>{chatName}</Text>
        <Text style={styles.message} numberOfLines={1}>{lastMessage}</Text>
      </View>
      {isGroup && <Text style={styles.groupLabel}>Group</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center", padding: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  content: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 16 },
  message: { color: "#555", marginTop: 2 },
  groupLabel: { fontSize: 12, color: "#007aff", fontWeight: "600" },
});
