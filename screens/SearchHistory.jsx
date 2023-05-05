import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useContext} from 'react';
import SearchContext from '../context/SearchContext';
const SearchHistory = () => {
  const {searchHistory} = useContext(SearchContext);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={[styles.titleContainer]}>
        <Text style={[styles.title]}>Search History</Text>
      </View>
      <View style={[styles.container]}>
        <FlatList
          data={searchHistory}
          renderItem={({item}) => <HistoryItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
const HistoryItem = ({item}) => {
  return <View><Text style={styles.searchItem}>{item}</Text></View>;
};
export default SearchHistory;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  container:{
    flex:1,
    padding:10,
  },
  searchItem:{
    fontSize:20,
    color:'white',

  }
});
