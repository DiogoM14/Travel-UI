import React from 'react';

import { View, StatusBar } from 'react-native';
import { Container } from './styles';

import Header from './components/Header';
import Bookmark from './components/Bookmark';

export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header /> 
       
      <View>
        <Bookmark />  
      </View>   
    </Container>
  );
}

