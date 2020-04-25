import React from "react";
import { View } from "react-native";
import styles from './styles';

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export default ScreenContainer;