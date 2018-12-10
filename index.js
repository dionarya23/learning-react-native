/** @format */
import React, { Component } from 'react';
import {View, Text, AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        <View style={{flex:1}}>
                <Header textHeader={'Albums'} />
                <AlbumList />
        </View>
    )
}


AppRegistry.registerComponent(appName, () => App);
