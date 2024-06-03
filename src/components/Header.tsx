import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Assets/Colors'
import Card from './Card'
import { moderateScale } from '../Assets/scale/scale'


const Header = ({onPress}) => {
    return (

        <View style={styles.dashboard}>
            <TouchableOpacity onPress={onPress}>
            <Image
            style={styles.iconStyle} 
            source={require('../Assets/Images/back.png')}/>
            </TouchableOpacity>
            <Text style={styles.text}>{'Green Sky Apartment'}</Text>
            <Image
            style={styles.iconDotStyle} 
            source={require('../Assets/Images/threeDots.png')}/>

        </View>

    )
}

const styles = StyleSheet.create({
    dashboard: {
        height: moderateScale(50),
        backgroundColor:Colors.DarkBlue,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius:20
        // borderBottomRightRadius: 10,
        // borderBottomLeftRadius: 10

    },
    text: {
        fontSize: moderateScale(14),
        fontWeight: "400",
        lineHeight:moderateScale(20) ,
        color: Colors.skyblue,
        marginLeft:15
        
    },

    iconStyle: {
        width: moderateScale(7),
        height:moderateScale(15) ,
        marginLeft: moderateScale(10),
        tintColor: Colors.skyblue,
        // resizeMode:'contain'
        
   
    },
    iconDotStyle:{
        width:moderateScale(24) ,
        height: moderateScale(24),
        tintColor: Colors.skyblue,
        marginLeft:moderateScale(180)
    } 
})

export default Header
