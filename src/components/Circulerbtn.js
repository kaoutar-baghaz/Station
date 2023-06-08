//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {COLORS, FONT} from '../constants/index';
import commonStyles from '../styles/commonStyles';
import { moderateScale } from '../styles/responsiveSize';

// create a component
const Circulerbtn = ({
    text,
    onPress
}) => {
    return (
        <TouchableOpacity style={{}}>

            <Image
                source={{ uri: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg' }}
                style={styles.imgStyle}
            />

            <View style={styles.bottomView}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    bottomView: {
        backgroundColor: COLORS.white,
        borderRadius: moderateScale(24),
        alignSelf: 'flex-start',
        padding: 4
    },
    textStyle: {
        ...commonStyles.fontSize12,
        alignSelf: 'center',
        color: COLORS.black,
        // fontFamily: "oseb",
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});

//make this component available to the app
export default Circulerbtn;