import React from 'react';
import styled from 'styled-components';

import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <Bookmark>
      <Feather name="bookmark" size={24} style={{color: '#ea3372'}} />
    </Bookmark>
  );
}

const Bookmark = styled.View`
  position: absolute;
  width: 56px;
  height: 56px;
  right: 32px;
  top: -58px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  z-index: 10;
`;

