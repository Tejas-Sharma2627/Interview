import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState, useContext} from 'react';
import SearchContext from '../context/SearchContext';
const {width, height} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {API_KEY} from '../constants/Keys';
const Header = ({searchTerm, setSearchTerm}) => {
  const {
    searchHistory,
    setSearchHistory,
    searchData,
    setSearchData,
    isLoading,
    setIsLoading,
  } = useContext(SearchContext);
  const handleSubmit = async () => {
    if (searchTerm.length == 0) return;
    setSearchHistory([...searchHistory, searchTerm]);
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`,
      );
      setSearchData(response.data.Search);
      console.log(response.data.Search[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <View>
      <View style={[styles.container]}>
        <Text style={[styles.title]}>Search Here</Text>
      </View>
      <View style={[styles.inputContainer]}>
        <View style={[styles.inputWrapper]}>
          <TextInput
            style={[styles.textarea]}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            placeholder="Search any title here"
            placeholderTextColor={'black'}
          />
        </View>
        <TouchableOpacity style={[styles.searchBtn]} onPress={handleSubmit}>
          <Ionicons name="search-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 600,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 12,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: '100%',
  },
  textarea: {
    width: width * 0.8,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 8,
    color: 'black',
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
