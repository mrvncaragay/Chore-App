import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../styles';

const ChoreItem = (props) => {
  const placeholderPhoto = `https://choreappphotos.s3-us-west-1.amazonaws.com/${Math.floor(Math.random() * 30)}.jpg`;
  const [chore, setChore] = useState('Trash');
  const [name, setName] = useState('Chris');
  const [photo, setPhoto] = useState(placeholderPhoto);
  const [done, setDone] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.circle} source={{ uri: placeholderPhoto }}></Image>
      </View>
      <Text style={styles.title}>{chore}</Text>
      <Text style={styles.body}>{name}</Text>
    </View>
  )
}

export default ChoreItem;
