import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { colors } from './src/styles/colors';
import HotelView from './src/screens/HotelViewComponents';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <HotelView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  },
});
