import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 16,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    height: 52,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
  },
  nameView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
  },
  edited: {
    backgroundColor: "gold",
  },
});
