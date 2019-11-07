import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => { },
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../image/main_image.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.mainComponents}>
          <Text style={styles.titleStyle}>Automated Testing Robot Framework</Text>
          <Text style={styles.titleStyle}>DEV-HII</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: "100%",
  },
  mainComponents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E4053',
  },
  titleStyle: {
    color: '#FDFEFE',
    fontSize: 20,
  },
});
