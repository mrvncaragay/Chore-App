import React from 'react';
import { Text, Button } from "react-native";
import { ScreenContainer } from '../../../../components';

const Landing = () => {

  return (
    <ScreenContainer>
      <Text>Imerse in seamless Chore app system</Text>
      <Button title="Get Started" onPress={() => alert('Todo')} />
    </ScreenContainer>
  )
};

export default Landing;