import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { default as Ionicons } from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import FavoritesScreen from './screens/Favorites';
import SettingsScreen from './screens/Settings';

import { HamburgerIcon, SettingsIcon, BackIcon } from './components/icons';

import { CustomDrawerContent } from './components';
import { colors } from './utils/constants';

const AppMainTab = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Sweet home',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PURPLE_400,
      },
      headerTitle: 'Sweet Home',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Favorites',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Favorites',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PURPLE_400,
      },
      headerTitle: 'Favorites',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PURPLE_400,
      },
      headerTitle: 'Profile',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <SettingsIcon onPress={() => navigation.navigate('Settings')} />,
    })
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PURPLE_300,
    inactiveBackgroundColor: colors.PURPLE_400,
    activeBackgroundColor: colors.PURPLE_400,
    showIcon: true,
    showLabel: Platform.OS === 'ios',
    indicatorStyle: {
      backgroundColor: colors.PURPLE_400,
    },
    style: {
      backgroundColor: colors.PURPLE_400,
    },
    upperCaseLabel: false,
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
});

const AppMainStack = StackNavigator({
  Home: { screen: AppMainTab },
  Settings: { screen: SettingsScreen },
}, {
  cardStyle: {
    backgroundColor: colors.PURPLE_300,
  },
  mode: 'modal',
});

const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainStack,
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-settings" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PURPLE_400,
      },
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
    })
  },
}, {
  contentComponent: props =>
    (<CustomDrawerContent
      {...props}
    />),
  contentOptions: {
    activeBackgroundColor: colors.PURPLE_500,
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PURPLE_600,
  },
});

const Navigator = TabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;
