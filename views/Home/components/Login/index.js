import React, { useState } from 'react';
import {
  Alert, Text, TextInput, TouchableHighlight,
} from 'react-native';
import { ScreenContainer } from '../../../../components';

const Login = ({ navigation }) => {
  const [login, setLogin] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onClick = (viewId) => {
    Alert.alert('Alert', `Button pressed ${viewId}`);
  };
  return (
    <ScreenContainer>
      <Text>Email</Text>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        onChange={(email) => setLogin({ email })}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChange={(password) => setLogin({ password })}
      />

      <TouchableHighlight onPress={navigation.goBack}>
        <Text>Login</Text>
      </TouchableHighlight>
    </ScreenContainer>
  );
};

export default Login;
