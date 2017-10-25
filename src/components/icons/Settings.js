import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconRightContainer = styled.TouchableOpacity`
  height: 100%;
  paddingRight: 15;
  justifyContent: center;
`;

const Settings = ({ onPress }) => (
  <IconRightContainer onPress={onPress}>
    <Icon name="md-settings" size={25} color="white" />
  </IconRightContainer>
);

export default Settings;
