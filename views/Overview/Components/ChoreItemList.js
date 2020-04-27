import React, { useState } from 'react';
import {
  Text, View, Image, ScrollView,
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ChoreItem from './ChoreItem';
import styles from '../styles';

const ChoreItemList = (props) => (
  <ScrollView>
    <ChoreItem />

  </ScrollView>
);

export default ChoreItemList;
