import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const IconLeftContainer = styled.TouchableOpacity`
  height: 100%;
  paddingLeft: 15;
  justifyContent: center;
`;

const Back = ({ onPress }) => (
  <IconLeftContainer onPress={onPress}>
    <Icon name="arrow-left" size={25} color="white" />
  </IconLeftContainer>
);

export default Back;
