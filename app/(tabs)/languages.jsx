import { useState, useCallback } from 'react';
import { View, StyleSheet, Text, Image, FlatList, RefreshControl } from 'react-native';

const MainComponent = (props) => {
    const { imgSrc, header, text } = props;
    return (
      <View style={styles.view}>
        <Image
          uri={imgSrc}
          source={imgSrc}
          style={styles.logo}
        />
        <Text style={styles.languageHeader}>{header}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
}

const DATA = [
  { imgSrc: require('@/assets/images/java.png'), header: 'Java', text: 'Finish a Java course on Hexlet.' },
  { imgSrc: require('@/assets/images/js.png'), header: 'JavaScript', text: 'I\'m finishing a Javascript course on Hexlet.' },
  { imgSrc: require('@/assets/images/python.png'), header: 'Python', text: 'Never studied.' },
];

export default () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <FlatList 
      ListHeaderComponent={
        <Text style={styles.header}>Pull down to see RefreshControl indicator.</Text>
      }
      data={DATA}
      renderItem={({item}) => <MainComponent imgSrc={item.imgSrc} header={item.header} text={item.text} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
    </FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  languageHeader: {
    fontSize: 54,
  },
  text: {
    fontSize: 24,
  },
  logo: {
    height: 300,
    width: 300,
    bottom: 0,
    left: 0,
  },
});
