/* @flow */

import React from 'react';
import { ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Banner from './Banner';
import CustomTabs from './CustomTabs';
import CustomTransitioner from './CustomTransitioner';
import Drawer from './Drawer';
import TabsInDrawer from './TabsInDrawer';
import ModalStack from './ModalStack';
import StacksInTabs from './StacksInTabs';
import StacksOverTabs from './StacksOverTabs';
import SimpleStack from './SimpleStack';
import SimpleTabs from './SimpleTabs';

const ExampleRoutes = {
  Warmups: {
    title: 'Aufwärmspiele',
    name: 'Aufwärmspiele',
    description: 'Aufwärmspiele',
    screen: SimpleStack,
  },
  Exercises: {
    title: 'Impro Übungen',
    name: 'Impro Übungen',
    description: 'Übungen',
    screen: SimpleStack,
  },
  Games: {
    title: 'Spiele',
    name: 'Spiele',
    description: 'Spiele',
    screen: SimpleStack,
  },
  Suggestions: {
    title: 'Vorgaben',
    name: 'Vorgaben',
    description: 'Vorgaben',
    screen: SimpleStack,
  },
  Glossar: {
    title: 'Begriffe',
    name: 'Begriffe',
    description: 'Begriffe',
    screen: SimpleStack,
  },
  Mistakes: {
    title: 'Fehler',
    name: 'Fehler',
    description: 'Fehler',
    screen: SimpleStack,
  },
  Longform: {
    title: 'Langformen',
    name: 'Langformen',
    description: 'Langformen',
    screen: SimpleStack,
  },
  Rules: {
    title: 'Regeln & Tipps',
    name: 'Regeln & Tipps',
    description: 'Regeln & Tipps',
    screen: SimpleStack,
  },
  Extras: {
    title: 'Weiteres',
    name: 'Weiteres',
    description: 'Weiteres',
    screen: SimpleStack,
  },
};

const MainScreen = ({ navigation }) => (
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
          <Text style={styles.description}>
            {ExampleRoutes[routeName].description}
          </Text>
        </View>
      </TouchableOpacity>
    ))}
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const AppNavigator = StackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: MainScreen,
      navigationOptions: {
          title: 'Impro Wiki',

        },
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'screen',
    /*<Icon name={'arrow-left'}
                                onPress={ () => { navigation.goBack() }} />,     */
    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;

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
