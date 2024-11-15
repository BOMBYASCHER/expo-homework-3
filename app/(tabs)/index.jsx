import { Text, View, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hi! My name is Daniil Kamanin!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'SpaceMono',
    color: 'black',
  }
});
