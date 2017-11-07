/**
 * @flow
 */

import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import SampleText from './SampleText';
import Posts from './Posts';
import Details from './Details';

const ExampleRoutes = {
  Warmups: {
    title: 'ABC Spiel',
    name: 'ABC Spiel',
    description: 'ABC Spiel',
    screen: Details,
  },
  Exercises: {
    title: 'Bunny Bunny',
    name: 'Bunny Bunny',
    description: 'Bunny Bunny',
    screen: Details,
  },
};

const MyProfileScreen = ({ navigation, banner }) => (
  <ScrollView>
    {Object.keys(ExampleRoutes).map((routeName: string) => (
      <TouchableOpacity
        key={routeName}
        onPress={() => {
          const { path, params, screen, title } = ExampleRoutes[routeName];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate(routeName, {}, action);
        }}
      >
        <View style={styles.item}>
          <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
        </View>
      </TouchableOpacity>
    ))}
    <Button onPress={() => navigation.goBack(null)} title="Go back" />

 </ScrollView>
);

MyProfileScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;

  return {
    headerTitle: `${params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

const SimpleStack = StackNavigator({
  ...ExampleRoutes,
  Index: {
    screen: MyProfileScreen,
  },
},
{
  initialRouteName: 'Index',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',  
  headerMode: 'none', // Disable the display of a duplicate header
});


/*
const SimpleStack =  ({ navigation }) => (
  <ScrollView>
    <Posts navigation={navigation} title="posts" />
   <Button onPress={() => navigation.goBack(null)} title="Go back" />
 </ScrollView>
);

SimpleStack.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    title: 'Impro',
  };
};*/

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});

export default SimpleStack;
