import React from "react";
import { View } from "react-native";
import styles from './styles';

const ScreenContainer = ({ children, style }) => (
  <View style={{ ...styles.container, ...style }}>{children}</View>
);

export default ScreenContainer;