import React from 'react';
import {
  View,
  Text,
  AsyncStorage,
  Button,
  StyleSheet,
  Image,
  YellowBox,
} from 'react-native';
const initialState = {
  profile: null,
};
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
console.disableYellowBox = true;
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {
        this._retrieveData();
      },
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  _retrieveData = async () => {
    try {
      AsyncStorage.getItem('profile').then(value => {
        if (value !== null) {
          let obj = JSON.parse(value);
          this.setState({profile: obj});
          this.forceUpdate();
        }
      });
    } catch (error) {
      // Error retrieving data
    }
  };

  deleteProfile() {
    AsyncStorage.clear();
    this.setState(initialState);
    this.forceUpdate();
  }

  render() {
    const {profile} = this.state;
    if (profile !== null) {
      return (
        <View style={styles.container}>
          <View style={styles.containerCenter}>
            <Text style={styles.titleStyle}>{''}</Text>
            <Text style={styles.titleStyle}>Member</Text>
            <Text style={styles.titleStyle}>{''}</Text>
            <Image
              source={require('../../image/profile.png')}
              style={styles.backgroundImage}
            />
            <Text style={styles.titleStyle}>{''}</Text>
          </View>
          <View>
            <Text style={styles.titleStyle}>
              Full Name : {profile.fullname}
            </Text>
            <Text style={styles.titleStyle}>Email : {profile.email}</Text>
            <Text style={styles.titleStyle}>Phone : {profile.phone}</Text>
            <Text style={styles.titleStyle}>Company : {profile.company}</Text>
            <Text style={styles.titleStyle}>Position : {profile.position}</Text>
          </View>
          <View style={styles.buttonDelete}>
            <Button
              color="red"
              title="delect profile"
              onPress={() => this.deleteProfile()}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.containerNotProfile}>
          <Text style={styles.titleStyle}>Not Profile</Text>
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4053',
  },
  containerCenter: {
    alignItems: 'center',
  },
  titleStyle: {
    color: '#FDFEFE',
    fontSize: 20,
    paddingLeft: 30,
  },
  TextInputStyle: {
    height: 40,
    borderColor: '#FDFEFE',
    borderWidth: 1,
    width: '90%',
    backgroundColor: '#FDFEFE',
  },
  containerNotProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E4053',
  },
  buttonDelete: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    width: 150,
    height: 150,
  },
});
