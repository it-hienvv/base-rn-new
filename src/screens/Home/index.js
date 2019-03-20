import THEMES from '../../libraries/themes';
const IMAGE = THEMES.IMAGE;
import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Splash from './@components/Splash';

const slides = [
    {
        key: 'somethun',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: IMAGE.home.backgournd_girl_1,
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: IMAGE.home.backgournd_girl_2,
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: IMAGE.home.backgournd_girl_3,
        backgroundColor: '#22bcb5',
    }
];

export default class App extends React.Component {
    state = {
        showRealApp: false
    }
    _renderItem = (item) => {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <Text
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'white'
                    }}
                >{item.title}</Text>
                <Image
                    style={{
                        height: Dimensions.get('screen').height,
                        width: Dimensions.get('screen').width,
                        position: 'relative',
                        zIndex: 0
                    }}
                    resizeMode='cover' 
                    source={item.image} 
                />
            </View>
        );
    }
    _onDone = () => {
        this.setState({ showRealApp: true });
    }
    render() {
        if (this.state.showRealApp) {
            return <Splash/>;
        } else {
            return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} />;
        }
    }
}