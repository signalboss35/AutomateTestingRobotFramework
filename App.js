import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/components/homeScreen';
import RegisterScreen from './src/components/registerScreen';
import ProfileScreen from './src/components/profileScreen';
import TabBar from './src/components/tabBar';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navigation => {
      return {
        header: null,
      };
    },
  },
});

const RegisterStack = createStackNavigator({
  Setting: {
    screen: RegisterScreen,
    navigationOptions: navigation => {
      return {
        header: null,
      };
    },
  },
});

const ProfileStack = createStackNavigator({
  Setting: {
    screen: ProfileScreen,
    navigationOptions: navigation => {
      return {
        header: null,
      };
    },
  },
});

const App = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: <Text style={{fontSize: 15}}>HOME</Text>,
      },
    },
    Register: {
      screen: RegisterStack,
      navigationOptions: {
        tabBarLabel: <Text style={{fontSize: 15}}>REGISTER</Text>,
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: <Text style={{fontSize: 15}}>PROFILE</Text>,
      },
    },
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
    tabBarOptions: {
      tabFeatured: 'Insert',
      backgroundFeaturedIcon: '#FFF',
      activeFeaturedTintColor: '#FFF',
      inactiveFeatureTintColor: '#E1E3DB',
      showLabel: true,
      backgroundColor: 'yellow',
      activeTintColor: '#42619b',
      inactiveTintColor: '#E1E3DB',
      style: {
        ...Platform.select({
          ios: {
            ...ifIphoneX(
              {
                height: 105,
              },
              {
                height: 65,
              },
            ),
          },
          android: {
            height: 50,
          },
        }),
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F2F3EF',
      },
      tabStyle: {},
    },
  },
);

export default createAppContainer(App);
