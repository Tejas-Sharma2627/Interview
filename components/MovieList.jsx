import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchContext from '../context/SearchContext';
import {useNavigation} from '@react-navigation/native';
const Card = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          imdbID: item.imdbID,
          title: item.Title,
        })
      }>
      <View style={[styles.cardContainer]}>
        <Text style={[styles.movieName]}>{item.Title}</Text>
        <Text style={[styles.movieName]}>{item.Year}</Text>
      </View>
    </TouchableOpacity>
  );
};
const MovieList = () => {
    const navigation = useNavigation();
  const {searchData, isLoading} = useContext(SearchContext);
  return (
    <View style={[styles.container]}>
      <View style={[styles.headerContainer]}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="search-outline" size={24} color="white" />
          <Text style={[styles.title]}>Your Search Result</Text>
        </View>

        <Text style={[styles.title]} onPress={()=>navigation.navigate('History')}>History</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <View style={{padding: 8}}>
          <FlatList
            data={searchData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Card item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.imdbID}
          />
        </View>
      )}
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: 12,
  },
  cardContainer: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
    borderRadius: 12,
    padding: 12,
  },
  movieName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
  },
});
