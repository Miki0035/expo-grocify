import { Show } from "@clerk/expo";
import { UserProfileView } from "@clerk/expo-native-components";
import { AuthView, UserButton } from "@clerk/expo/native-components";
import { useState } from "react";
import { Button, Modal, StyleSheet, View } from "react-native";

export default function Screen() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <Button title="Sign in" onPress={() => setIsAuthOpen(true)} />
      </Show>
      <Modal
        animationType="slide"
        visible={isAuthOpen}
        presentationStyle="pageSheet"
        onRequestClose={() => setIsAuthOpen(false)}
      >
        <AuthView onDismiss={() => setIsAuthOpen(false)} />
      </Modal>
      <UserProfileView isDismissible={false} style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
