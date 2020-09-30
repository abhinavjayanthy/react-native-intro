import React from 'react'
import { Text, StyleSheet,View } from 'react-native'


const ComponentsScreen = () => {
    const name = "Abhinav"
    const greeting = <Text style = {styles.testStyle2}>My name is {name}</Text>
    return <View>
        <Text style = {styles.testStyle}>Getting started with react native</Text>
        {greeting}
    </View>

}

const styles = StyleSheet.create({
    testStyle: {
        fontSize:45
    },
    testStyle2: {
        fontSize:20
    }
})

export default ComponentsScreen
