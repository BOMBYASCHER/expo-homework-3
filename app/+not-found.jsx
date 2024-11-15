import { Link, Stack } from 'expo-router';
import { StyleSheet, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  const imgSrc = require('@/assets/images/sad-cat.png');
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <Image 
          uri={imgSrc}
          source={imgSrc}
        />
        <ThemedText type="title" style={styles.text}>This page doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: 'black',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
