
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

export default class VerticallyAppear extends React.Component {
    state = {
        heightText: new Animated.Value(0),
    }

    componentDidMount(){
        this.anim()
    }

    anim = () => {
        Animated.timing(this.state.heightText,{
            toValue:1,
            duration:this.props.duration,
            useNativeDriver:false
        }).start()
    }


    render() {

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                <Animated.View style={{ alignSelf: 'center', justifyContent: "center", transform:[{scaleY:this.state.heightText}] }}>
                    {this.props.children}
                    
                </Animated.View>
                
            </View>
        )
    }
}