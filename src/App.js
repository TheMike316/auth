import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggendIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCRSk9-bhrqTz-Y0Selg5tgmLTKDVNFo7w',
      authDomain: 'authentication-57f47.firebaseapp.com',
      databaseURL: 'https://authentication-57f47.firebaseio.com',
      projectId: 'authentication-57f47',
      storageBucket: 'authentication-57f47.appspot.com',
      messagingSenderId: '241852324413'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggendIn: true });
      } else {
        this.setState({ loggendIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggendIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
