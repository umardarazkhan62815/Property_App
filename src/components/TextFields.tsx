import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale } from '../Assets/scale/scale'

export const TextFields = (props) => {
    const {
        placeholder = "",
        onChangeText,
        value
    } = props
    return (
        <TextInput
            style={styles.TextinputStyle}
            placeholder={placeholder}
            value={value}
                onChangeText={onChangeText}
        />
    )
}
const styles = StyleSheet.create({
    TextinputStyle: {
        width: moderateScale(338),
        height: moderateScale(38),
        borderWidth: 0.2,
        borderColor: "black",
        marginVertical: moderateScale(4),
        paddingLeft: moderateScale(10),
        fontSize: moderateScale(12),
    }
})
export default TextFields