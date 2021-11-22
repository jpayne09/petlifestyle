import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import { PaperProvider } from 'react-native-paper';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import Entry from './components/EntryComponent';
const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
          <Main />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
