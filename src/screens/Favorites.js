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

class FavoritesScreen extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Favorites</TitleText>
      </ContainerView>
    );
  }
}

export default FavoritesScreen;
