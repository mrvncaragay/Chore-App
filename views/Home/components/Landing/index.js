import React from 'react';
import { Text, Button } from 'react-native';
import { ScreenContainer } from '../../../../components';

const Landing = ({ navigation }) => (
  <ScreenContainer>
    <Text>Imerse in seamless Chore app system</Text>
    <Button title="Get Started" onPress={() => navigation.push('Login')} />
  </ScreenContainer>
);

export default Landing;
