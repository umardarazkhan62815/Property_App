import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../Assets/Colors';

const Card = ({ imageSource, heading, text1, text2, text3 ,containerStyle,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={[styles.cardView,containerStyle]}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.text}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
      <Text style={styles.text}>{text3}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: 163,
    backgroundColor:Colors.primary,
    marginTop: 18,
    paddingLeft: 16,
  
  
  },
  image: {
    marginTop:18,
    width: 27,
    height: 27,
    resizeMode: 'contain',
    marginBottom: 9,
  },
  heading: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.gra7,
    fontWeight: '600',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: Colors.gra7,
    marginVertical:4

  },

});

export default Card;
