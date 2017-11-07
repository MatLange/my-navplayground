import App from './js/App';
import React, {Component} from 'react';
import {StatusBar, View} from 'react-native'
import {StackNavigator} from 'react-navigation';


export default class AppStart extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <App />
      </View>
    )
  }
}
