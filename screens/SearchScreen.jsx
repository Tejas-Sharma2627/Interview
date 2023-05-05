import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Header, MovieList} from '../components';
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, padding: 4}}>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MovieList />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
