import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {COLORS} from '../constants/index'

const Buttons = ({on_press,btn_text}) => {
    return (
        <TouchableOpacity style={{justifyContent:'center',width:'70%',backgroundColor: COLORS.tertiary,height:50,marginBottom:30,borderRadius:10}} 
        onPress={on_press}
        >
            <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',color: COLORS.white}} >{btn_text}</Text>


        </TouchableOpacity>
    )
}

export default Buttons;

const styles = StyleSheet.create({})
