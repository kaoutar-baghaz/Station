import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, images } from '../constants/index'

const Promotions = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.promotionContainer}>
        <Image source={images.promotion1} style={styles.promotionImage} />
        <View style={styles.promotionDetails}>
          <Text style={styles.promotionTitle}>Special offer</Text>
          <Text style={styles.promotionDescription}>Get a 5% discount on all petroleum products.</Text>
          <View style={styles.iconContainer}>
            <Icon name="star" size={20} color="#FFC107" />
            <Text style={styles.iconText}>Promotion in progress</Text>
          </View>
        </View>
      </View>

      <View style={styles.promotionContainer}>
        <Image source={images.promotion2} style={styles.promotionImage} />
        <View style={styles.promotionDetails}>
          <Text style={styles.promotionTitle}>New fuel</Text>
          <Text style={styles.promotionDescription}>Discover our new high performance fuel</Text>
          <View style={styles.iconContainer}>
            <Icon name="clock-o" size={20} color="#4CAF50" />
            <Text style={styles.iconText}>Valid until 31/12/2023</Text>
          </View>
        </View>
      </View>

      <View style={styles.promotionContainer}>
        <Image source={images.promotion4} style={styles.promotionImage} />
        <View style={styles.promotionDetails}>
          <Text style={styles.promotionTitle}>Dont miss our Good Deals!</Text>
          <Text style={styles.promotionDescription}>Discover our special offers on our products</Text>
          <View style={styles.iconContainer}>
            <Icon name="star" size={20} color="#FFC107" />
            <Text style={styles.iconText}>Promotion in progress</Text>
          </View>
        </View>
      </View>

      <View style={styles.promotionContainer}>
        <Image source={images.promotion5} style={styles.promotionImage} />
        <View style={styles.promotionDetails}>
          <Text style={styles.promotionTitle}>Special promotion on the car!</Text>
          <Text style={styles.promotionDescription}>Enjoy 20% off all maintenance services at Eydon Petroleum</Text>
          <View style={styles.iconContainer}>
            <Icon name="clock-o" size={20} color="#4CAF50" />
            <Text style={styles.iconText}>Valid until 31/12/2023</Text>
          </View>
        </View>
      </View>

      <View style={styles.promotionContainer}>
        <Image source={images.promotion3} style={styles.promotionImage} />
        <View style={styles.promotionDetails}>
          <Text style={styles.promotionTitle}>Limited-Time Promotion!</Text>
          <Text style={styles.promotionDescription}>Get a free car wash with every fuel purchase at Eydon Petroleum</Text>
          <View style={styles.iconContainer}>
            <Icon name="star" size={20} color="#FFC107" />
            <Text style={styles.iconText}>Promotion in progress</Text>
          </View>
        </View>
      </View>
      

      {/* Ajoutez autant de promotions que vous le souhaitez */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  promotionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 5,
    borderStyle: "dashed",
    borderColor: COLORS.tertiary
  },
  promotionImage: {
    width: 120,
    height: 120,
    marginRight: 5,
    borderRadius: 8,
    alignSelf: 'center'
  },
  promotionDetails: {
    flex: 1,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  promotionDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#777',
  },
});

export default Promotions;
