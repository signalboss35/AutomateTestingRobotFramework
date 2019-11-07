import React from 'react';
import {View, Text} from 'react-native';
export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {},
    );
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>ProfileScreen!</Text>
      </View>
    );
  }
}
