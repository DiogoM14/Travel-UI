import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function App() {
  return (
    <View>
      <Image source={require('../../../../../assets/hotel.jpg')} />

      <TopButtons>
        <AntDesign name="close" size={24} color="#fff" />

        <View style={{flexDirection: "row", alignItems: "center"}}>
          <AntDesign name="save" size={24} style={{marginLeft: 12, color: "#fff"}} />
          <AntDesign name="sharealt" size={24} style={{marginLeft: 12, color: "#fff"}} />
          <Entypo name="dots-three-vertical" size={18} style={{marginLeft: 12, color: "#fff"}} />
        </View>
      </TopButtons>

    </View>
  );
}

const Image = styled.Image`
  width: 100%;
  height: 400px;
`;

const TopButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 24px;
  left: 32px;
  right: 32px;
`;

