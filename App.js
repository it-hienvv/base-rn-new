/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import RootView from 'screens/RootView';
import MainNavigation from 'navigations';
export default class App extends React.Component {
    render() {
        return(
           <RootView>
               <MainNavigation/>
           </RootView>
        )
    }
}