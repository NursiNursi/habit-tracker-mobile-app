import { useAuth } from "@/lib/auth-context";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const { signOut } = useAuth();

  return (
    <View style={styles.view}>
      <Text>My new app</Text>
      <Link href="/login" style={styles.navButton}>
        Login Page
      </Link>
      <Button mode="text" onPress={signOut} icon={"logout"}>
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 25,
    backgroundColor: "lightblue",
    textAlign: "center",
    borderRadius: 8,
  },
});

