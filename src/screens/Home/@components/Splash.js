import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default Splash = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>Welcome to my app</Text>
            <Text style={styles.titleText}>Design by Hiền Vũ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(32, 53, 70,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    }
})