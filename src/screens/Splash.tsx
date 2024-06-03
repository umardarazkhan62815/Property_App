import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../Assets/Colors'

const Splash = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 1000);
    }, [])

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.searchText}>{'Scoring Panel'}</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.blue,
        justifyContent: "center",
        alignItems: 'center'
    },
    searchText: {
        width:200,
        color: Colors.white,
        fontSize: 26,
        fontWeight: '700',
        fontStyle: 'italic',
        textAlign:'center'
    }
})