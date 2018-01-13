import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCRSk9-bhrqTz-Y0Selg5tgmLTKDVNFo7w',
      authDomain: 'authentication-57f47.firebaseapp.com',
      databaseURL: 'https://authentication-57f47.firebaseio.com',
      projectId: 'authentication-57f47',
      storageBucket: 'authentication-57f47.appspot.com',
      messagingSenderId: '241852324413'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
