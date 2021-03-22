
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

export default class RotateXaxis extends React.Component {
    state = {
        Rotate: new Animated.Value(0),
    }

    componentDidMount() {
        this.anim()
    }

    anim = () => {
        Animated.loop(
            Animated.timing(this.state.Rotate, {
                toValue: 360,
                duration: this.props.duration,
                useNativeDriver: false
            })
        ).start()
    }


    render() {

        let spin = this.state.Rotate.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        }

        )

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                <Animated.View style={{ alignSelf: 'center', justifyContent: "center", transform: [{ rotateX: spin }] }}>
                    {this.props.children}
                </Animated.View>
            </View>
        )
    }
}