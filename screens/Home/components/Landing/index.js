import React from "react";
import { Button, Text } from "react-native-elements";
import { ScreenContainer } from "../../../../components";
import styles from "./styles";

const Landing = ({ navigation }) => (
  <ScreenContainer style={styles.root}>
    <ScreenContainer style={styles.intro}>
      <Text style={styles.text}>Immerse in a seamless Chore App system</Text>
      <Text style={styles.text}>We promise that you&apos;ll have the most time with us ever.</Text>
    </ScreenContainer>

    <ScreenContainer style={styles.getStarted}>
      <Button
        type="outline"
        title="Get Started"
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.push("Login")}
      />
    </ScreenContainer>
  </ScreenContainer>
);

export default Landing;
