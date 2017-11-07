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


const DetailView = ({ navigation, banner }) => (
  <ScrollView>
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
 </ScrollView>
);

DetailView.navigationOptions = props => {
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

const Details = StackNavigator({
  Details: {
    path: 'photos/:name',
    screen: DetailView,
  }
},
{
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

export default Details;
