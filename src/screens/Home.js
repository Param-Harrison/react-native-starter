import React, { Component } from 'react';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${props => props.theme.WHITE};
`;

const TitleText = styled.Text`
  fontSize: 24;
  color: ${props => props.theme.textColor};
`;

class HomeScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Home</TitleText>
      </ContainerView>
    );
  }
}

export default HomeScreen;
