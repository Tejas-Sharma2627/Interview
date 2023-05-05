import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_KEY} from '../constants/Keys';

const DetailsScreen = ({navigation, route}) => {
  const {imdbID, title} = route.params;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`,
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading && <ActivityIndicator size="large" color="white" />}
        {isLoading || (
          <View>
            <View style={[styles.titleContainer]}>
              <Text style={[styles.title]}>Movie Details</Text>
              <Text
                style={[styles.movieName]}
                onPress={() => console.log(data)}>
                {title}
              </Text>
            </View>
            <View style={[styles.infoContainer]}>
              <KeyValue title="Country" value={data.Country} />
              <KeyValue title="Director" value={data.Director} />
              <KeyValue title="Actors" value={data.Actors} />
              <KeyValue title="Awards" value={data.Awards} />
              <KeyValue title="Box Office" value={data.BoxOffice} />
              <KeyValue title="Rated" value={data.Rated} />
              <KeyValue title="Runtime" value={data.Runtime} />
            </View>
            <View style={[styles.plotContainer]}>
              <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
                Synopsis:
              </Text>
              <Text style={{color: 'white', lineHeight: 24}}>{data.Plot}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const KeyValue = ({title, value}) => {
  return (
    <View style={[styles.KeyValueContainer]}>
      <View style={[styles.bullet]} />
      <Text style={[styles.infoKey]}>{title}: </Text>
      <Text style={[styles.infoData]}>{value}</Text>
    </View>
  );
};
export default DetailsScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  movieName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  KeyValueContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginTop: 6,
    marginLeft: 10,
    alignItems: 'center',
  },
  infoKey: {
    fontSize: 14,
    color: 'white',
  },
  infoData: {
    fontSize: 14,
    color: 'red',
  },
  plotContainer: {
    flex: 1,
    padding: 10,
  },
});
