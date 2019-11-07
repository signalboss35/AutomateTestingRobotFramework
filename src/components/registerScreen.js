import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
const initialState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  companyName: '',
  jobPositionName: '',
};
export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
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

  saveData() {
    const {
      fullName,
      email,
      phoneNumber,
      companyName,
      jobPositionName,
    } = this.state;
    if (
      fullName == '' ||
      email == '' ||
      phoneNumber == '' ||
      companyName == '' ||
      jobPositionName == ''
    ) {
      Alert.alert('Error', 'กรุณากรอกข้อมูลทั้งหมดให้ครบถ้วน');
      this.setState(initialState);
    } else {
      Alert.alert('Successful', 'บันทึกข้อมูลสำเร็จ');
      this.setState(initialState);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCenter}>
          <Text style={styles.titleStyle}>{''}</Text>
          <Text style={styles.titleStyle}>New Member Registration</Text>
          <Text style={styles.titleStyle}>{''}</Text>
          <TextInput
            style={styles.TextInputStyle}
            placeholder='Fullname (Auttachai Kanthanras)'
            onChangeText={text => this.setState({fullName: text})}
            value={this.state.fullName}
          />
          <Text style={styles.titleStyle}>{''}</Text>
          <TextInput
            style={styles.TextInputStyle}
            placeholder='Email Address (auttachai@hii.or.th)'
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
          />
          <Text style={styles.titleStyle}>{''}</Text>
          <TextInput
            style={styles.TextInputStyle}
            placeholder='Phone Number (0931234567)'
            onChangeText={text => this.setState({phoneNumber: text})}
            value={this.state.phoneNumber}
          />
          <Text style={styles.titleStyle}>{''}</Text>
          <TextInput
            style={styles.TextInputStyle}
            placeholder='Company Name'
            onChangeText={text => this.setState({companyName: text})}
            value={this.state.companyName}
          />
          <Text style={styles.titleStyle}>{''}</Text>
          <TextInput
            style={styles.TextInputStyle}
            placeholder='Job Position Name (SA , DEV , Designer , etc)'
            onChangeText={text => this.setState({jobPositionName: text})}
            value={this.state.jobPositionName}
          />
          <Text style={styles.titleStyle}>{''}</Text>
          <Button
            title="submit"
            // onPress={() => }/>
            onPress={() => this.saveData()}
          />
        </View>
      </View>
    );
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
    fontSize: 30,
  },
  TextInputStyle: {
    height: 40,
    borderColor: '#FDFEFE',
    borderWidth: 1,
    width: '90%',
    backgroundColor: '#FDFEFE',
  },
});
