import { Button, StyleSheet, Text, View } from "react-native";

const SortButton = () => {
  return (
    <View style={styles.container}>
      
      <Text numberOfLines={1} ellipsizeMode="tail">Default</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: 16,
    marginBottom: 6,
    top: -2,
    maxWidth: 100,
    borderWidth: 1,
    borderRadius: 5,
  },
})

export default SortButton;
