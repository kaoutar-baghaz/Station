//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {images} from '../constants/index';

import { useNavigation } from '@react-navigation/native'
import { moderateScale } from '../styles/responsiveSize';
import {COLORS} from '../constants/index';
import commonStyles from '../styles/commonStyles';
import RoundImg from './RoundImg';

const HomeHeader = ({
    leftImg = images.icBack,
    onPress,
    headerStyle,
    centerText,
    lastImg = images.icMore,
    setting
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <RoundImg
                    image='https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
                />

                <Image style={{ marginLeft: moderateScale(16) }} source={images.icSearch} />
            </View>
            <Text style={styles.textStyle}>{centerText}</Text>

            {!!setting ?
                <TouchableOpacity>
                    <Image source={setting} />
                </TouchableOpacity>
            : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ marginRight: moderateScale(16) }} source={images.icAdd} />
                    <Image source={lastImg} />
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textStyle: {
        ...commonStyles.fontSize20,
        flex:1,
    }
});

export default HomeHeader;
