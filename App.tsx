import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, SearchHistory, SearchScreen} from './screens';
import SearchState from './context/SearchState';
const App = () => {
  const Stack = createStackNavigator();
  const options = {
    headerStyle: {
      backgroundColor: 'grey',
    },
    headerShadowVisible: false,
    headerTitle: '',
  };
  return (
    <SearchState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={options}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={options}
          />
          <Stack.Screen
            name="History"
            component={SearchHistory}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchState>
  );
};

export default App;

const styles = StyleSheet.create({});
