import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
export default class RootView extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.props.children}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})