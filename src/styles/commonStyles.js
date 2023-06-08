import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/index';
import { moderateScale, moderateScaleVertical, textScale } from './responsiveSize';


export default StyleSheet.create({
    fontSize10: {
        fontSize: textScale(10),
        // fontFamily:'osr',
        color: COLORS.black
    },
    fontSize12: {
        fontSize: textScale(12),
        // fontFamily:'osr',
        color: COLORS.black
    },
    fontSize14: {
        fontSize: textScale(14),
        // fontFamily:'osb',
        color: COLORS.black
    },
    fontSize16: {
        fontSize: textScale(16),
    //    fontFamily :'osr',
        color: COLORS.black
    },
    fontSize20: {
        fontSize: textScale(20),
        // fontFamily:'ossmb',
        color: COLORS.black
    },
    fontSize24: {
        fontSize: textScale(24),
        color: COLORS.white,
        // fontFamily: 'ossmb',
        textTransform: 'uppercase'
    },
})