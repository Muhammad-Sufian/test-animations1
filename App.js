
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';
import SwipeButton from './animations/SwipeButton'

export default class App extends React.Component {
    state = {
        triggerVar: false,
        num2: false
    }
    render() {

        return (
            <View style={{ width: '100%', height: '100%' }}>

                <View style={{ height: 100, width: '100%' }}>


                    <SwipeButton width={150} height={50} borderRadius={50} speed={10} buttonOffColor={'orange'} buttonOnColor={'lime'} callbackStatus={(status)=>alert(status)}/>



                </View>
                

            </View>
        )
    }
}


/*
USAGE:




*/