import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styles from '../styles';
import ChoreItem from './ChoreItem';

const ChoreItemList = (props) => {
  return (
    <ScrollView>
      <ChoreItem />

    </ScrollView>
  )
}

export default ChoreItemList;